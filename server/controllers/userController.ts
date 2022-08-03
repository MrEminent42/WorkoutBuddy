import { Request, Response } from "express";

// login user
const loginUser = async (req: Request, res: Response) => {

    res.json({ message: "login user" })
}

// sign up
const signupUser = async (req: Request, res: Response) => {
    res.json({ message: "signup user" })
}

export { loginUser, signupUser }