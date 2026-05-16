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
    console.log("breakpoint1");
    const userExists = await dbClient.user.findFirst({
        where: {
            email: parsedData.data.username,
        }
    })
    console.log("breakpoint2")

    if(userExists){
        return res.status(403).json({
            message: "user already exists"
        })
    }
    console.log("breakpoint3")
    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

    await dbClient.user.create({
        data: {
            email: parsedData.data.username,
            password: hashedPassword,
            name: parsedData.data.name
        }
    })

    console.log("breakpoint4")
    //await sendEmail();
    console.log("signup handler")
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
    const user = await dbClient.user.findUnique({
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
    console.log(token);
    
    console.log("signin handler");
    res.json({
        message: "signup endpoint hitted",
        token: token
    })
});

userRouter.get("/:user", userMiddleware, async(req, res) => {
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
        message: "user endpoint hitted"
    })
})
