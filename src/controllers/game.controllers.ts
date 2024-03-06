import { Request, Response } from 'express';
import prisma from '../db/client';
import { uploadImage } from '../utils/cloudinary';

export const getAllGames = async (req: Request, res: Response) => {
    try {
        const allGames = await prisma.game.findMany({
            include: {
                votes: {
                    select: { user: { select: { name: true, id: true } } },
                },
            },
        });
        res.status(200).json(allGames);
    } catch (error) {
        const err = error as Error;
        console.error(error); 
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

export const createGame = async (req: Request, res: Response) => {
    const { name, category, image, userId } = req.body;

    if (!image) {
        return res.status(400).send('No image URL was provided.');
    }

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });

        if (!user || user.role !== 'ADMIN') {
            return res.status(403).send('Only admins can create games.');
        }

        const result = await uploadImage(image);
        
        const game = await prisma.game.create({
            data: { 
                name, 
                category, 
                image: result.url,
                creator: {
                    connect: { id: userId }
                }
            }
        });
    
        res.status(201).json(game);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getGamesByUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const userGames = await prisma.user.findUnique({
            where: { id: userId },
            include: { games: true },
        });

        if (!userGames) {
            return res.status(404).send('User not found.');
        }

        res.status(200).json(userGames.games);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getGameById = async (req: Request, res: Response) => {
    const { gameId } = req.params;

    try {
        const game = await prisma.game.findUnique({
            where: { id: gameId },
            include: {
                votes: {
                    select: { user: { select: { name: true, id: true } } } 
                },
            },
        });
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateGame = async (req: Request, res: Response) => {
    const { gameId, userId } = req.params;
    const { name, category, image } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });

        if (!user || user.role !== 'ADMIN') {
            return res.status(403).send('Only admins can update games.');
        }

        const updatedGame = await prisma.game.update({
            where: { id: gameId },
            data: { name, category, image }
        });

        res.status(200).json(updatedGame);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteGame = async (req: Request, res: Response) => {
    const { gameId, userId } = req.params;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });

        if (!user || user.role !== 'ADMIN') {
            return res.status(403).send('Only admins can delete games.');
        }

        const deletedGame = await prisma.game.delete({
            where: { id: gameId }
        });

        res.status(200).json(deletedGame);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const voteGame = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const { id: gameId } = req.params;

    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });

        if (!user || user.role !== 'ADMIN') {
            return res.status(403).send('Only admins can vote games.');
        }

        const vote = await prisma.vote.create({
            data: { 
                user: { connect: { id: userId } },
                game: { connect: { id: gameId } }
            }
        });

        res.status(200).json(vote);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const unvoteGame = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const { id: gameId } = req.params;

    try {
        const vote = await prisma.vote.findFirst({
            where: { 
                userId: userId,
                gameId: gameId
            }
        });

        if (!vote) {
            return res.status(404).send('Vote not found.');
        }

        const unvote = await prisma.vote.delete({
            where: { id: vote.id }
        });

        res.status(200).json(unvote);
    } catch (error) {
        res.status(500).json(error);
    }
};