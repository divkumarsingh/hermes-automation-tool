import { request, Router } from "express";
import { userMiddleware } from "../../middleware";
import { prisma as dbClient} from "@repo/database/client";
import {SignupSchema, SigninSchema} from "@repo/types/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const userRouter = Router();


userRouter.post("/signup", async(req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);
    if(!parsedData.success) {
        return res.status(411).json({msg: "Incorrect inputs" })
    }

    const userExists = await dbClient.user.findFirst({
        where: {
            email: parsedData.data.username,
        }
    })


    if(userExists){
        return res.status(403).json({
            message: "user already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

    await dbClient.user.create({
        data: {
            email: parsedData.data.username,
            password: hashedPassword,
            name: parsedData.data.name
        }
    })


    //await sendEmail();

    return res.json({
        message: "please verify your account"
    })
});

userRouter.post("/signin", async(req, res) => {
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);


    if(!parsedData.success){
        return res.status(411).json({message: "Incorrect Inputs"})
    }
    const email = parsedData.data.username;
    const user = await dbClient.user.findFirst({
        where: {email}
    });
    if(!user){
        return res.status(411).json({message: "Invalid email or password"})
    }

    const isValidPassword = await bcrypt.compare(parsedData.data.password, user.password);
    if(!isValidPassword){
        return res.status(411).json({message: "Invalid email or password"})
    }

    const token = jwt.sign({
        id: user.id
    }, (process.env.JWT_SECRET as string))
    
    res.json({
        message: "signup endpoint hitted",
        token: token
    })
});

userRouter.get("/", userMiddleware, async(req, res) => {
    //@ts-ignore
    
    const id = req.id;

    const user = await dbClient.user.findFirst({
        where: {
            id,
        },
        select: {
            name: true,
            email: true
        }
    })


    
    console.log("user handler");
    res.json({
        user
    })
})
