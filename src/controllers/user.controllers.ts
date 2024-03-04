import { Request, Response } from 'express';
import prisma from '../db/client';

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {    
        const newUser = await prisma.user.create({
            data: { name, email, password }
        });
    
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUserByEmail = async (req: Request, res: Response) => {
    const { userEmail } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: {
                movies: {
                    include: {
                        genres: {
                            select: { genre: { select: { name: true, id: true } } },
                        },
                    },
                },
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
};

