import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
    res.status(200).send("get all users");
}

export const createUser = (req: Request, res: Response) => {
    res.status(200).send("Post: user created");
}

export const deleteUser = (req: Request, res: Response) => {
    console.log('req', req.params.userId)
    const {
        params : {userId}
     } = req;
    console.log('userId', userId)
    res.status(200).send(`Delete: user deleted ${userId}`);
}