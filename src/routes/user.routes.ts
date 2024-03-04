import { Router } from "express";
import { getAllUsers, createUser, deleteUser } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/", createUser);
userRoutes.delete("/:userId", deleteUser);

export default userRoutes;