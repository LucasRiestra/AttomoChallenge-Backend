import { Request, Response } from 'express';
import prisma from '../db/client';

export const getAllGames = async (req: Request, res: Response) => {
    try {
        const allGames = await prisma.game.findMany({
            include: {
                votes: {
                    select: { user: { select: { username: true, id: true } } } 
                },
            },
        });
        res.status(200).json(allGames);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createGame = async (req: Request, res: Response) => {
    const { name, category, imageUrl } = req.body;

    try {
        const game = await prisma.game.create({
            data: { name, category, imageUrl }
        });
    
        res.status(201).json(game);
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
                    select: { user: { select: { username: true, id: true } } } 
                },
            },
        });
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateGame = async (req: Request, res: Response) => {
    const { gameId } = req.params;
    const { name, category, imageUrl } = req.body;

    try {
        const updatedGame = await prisma.game.update({
            where: { id: gameId },
            data: { name, category, imageUrl }
        });

        res.status(200).json(updatedGame);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteGame = async (req: Request, res: Response) => {
    const { gameId } = req.params;

    try {
        const deletedGame = await prisma.game.delete({
            where: { id: gameId }
        });

        res.status(200).json(deletedGame);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const voteGame = async (req: Request, res: Response) => {
    const { gameId, userId } = req.body;

    try {
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
    const { voteId } = req.params;

    try {
        const unvote = await prisma.vote.delete({
            where: { id: voteId }
        });

        res.status(200).json(unvote);
    } catch (error) {
        res.status(500).json(error);
    }
};