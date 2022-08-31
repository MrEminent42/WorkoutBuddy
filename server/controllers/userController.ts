import { Request, Response } from "express";
import User from "../models/UserModel.js";
import bcrypt from 'bcryptjs';
import validator from 'validator';

// login user
const loginUser = async (req: Request, res: Response) => {

    res.json({ message: "login user" })
}

// sign up
const signupUser = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) throw Error('All fields must be filled.');
        if (!validator.isEmail(email)) throw Error('Please enter a valid email.');
        if (!validator.isStrongPassword(password)) throw Error('Please enter a stronger password.');


        const exists = await User.findOne({ email });

        if (exists) {
            throw new Error("That user already exists.")
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await User.create({
            email: email,
            password: hash,
        })

        return res.status(200).json({ email, user })

    } catch (error) {
        if (error instanceof Error) res.status(400).json({ error: error.message });
        else return res.status(400).json(error)
    }
}

export { loginUser, signupUser }