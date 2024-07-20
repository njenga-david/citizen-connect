import { Request, Response, RequestHandler } from 'express'
import { v4 as uid } from 'uuid'
import { sqlConfig } from '../config'
import mssql from 'mssql'
import { RegisterSchema } from '../Helpers/registerSchema'
import Bcrypt from 'bcrypt'
import { Payload, User } from '../Models/authModel'
import Jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'

import { ExtendedRequest1 } from '../middlewares'
import { DbHelper } from '../DatabaseHelpers'
import { UserSchema } from '../inputValidation/authValidation'

dotenv.config({ path: path.resolve(__dirname, "../../.env") })

const dbInstance = new DbHelper()

export async function registerUser(req: Request, res: Response) {
    try {
        const id = uid()
        const { userImg, userName, userEmail, roleName, upassword } = req.body
        console.log(req.body)
        const { error } = RegisterSchema.validate(req.body)

        if (error) {
            return res.status(400).json(error.details[0].message)
        }

        const HashPassword = await Bcrypt.hash(upassword, 9)

        await dbInstance.exec("registerUser", {
            userId: id,
            userImg,
            userName,
            userEmail,
            roleName,
            upassword: HashPassword
        })


        return res.status(201).json({ message: "User added successfully" })

    } catch (error) {
        return res.status(500).json(error)

    }

}


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { userEmail, upassword } = req.body;
        console.log(req.body)
       

        const user = await (await dbInstance.exec("getUser", {
            userEmail
        })).recordset as User[]
        console.log(user)
        if (user.length !== 0) {
            const isValid = await Bcrypt.compare(upassword, user[0].upassword);

            if (isValid) {
                const payload: Payload = {
                    Sub: user[0].userId,
                    userName: user[0].userName
                };
                const token = await Jwt.sign(payload, process.env.SECRET as string, { expiresIn: '10h' });
                return res.status(200).json({ message: "Login Successful!", token });
            }
        }

        // return res.status(400).json({ message: "Invalid Credentials" });

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getUser = async (req: Request<{ id: string }>, res: Response) => {
    try {

        const id = req.params.id
        console.log(id)
        const user = (await dbInstance.exec('getUser', { id })).recordset[0] as User

        if (user && user.userId) {
            return res.status(200).json(user)
        }

        return res.status(400).json({ message: "No  user found!" })

    } catch (error) {
       return res.status(500).json(error)
    }
}


export const getUsers: RequestHandler = async (req, res) => {
    try {

        const users = (await dbInstance.exec('getUsers', {})).recordset as User[]

        res.status(200).json(users)

    } catch (error) {
        res.status(500).json(error)
    }
}



export const deleteUser = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const  id  = req.params.id
        const { userName, userEmail } = req.body;

        // Check if the user exists
        const user =( await dbInstance.exec('getUser', {id})).recordset[0] as User

        if (user && user.userId) {
            // user exists, DELETE
            await dbInstance.exec('deleteUser', {userId:id});

            // updating isDeleted flag
            return res.status(200).json({ message: "User Successfully Deleted", userId: id });
        } else {
            // user not found
           return res.status(404).json({ message: "User not Found" });
        }
    } catch (error) {
       return res.status(500).json(error);
    }
};








export const welcomePage = (req: ExtendedRequest1, res: Response) => {
    try {
        res.status(200).send(`<h2> Welcome ${req.info?.userName} </h2>`)

    } catch (error) {

    }
}
