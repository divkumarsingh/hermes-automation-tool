import { Router } from "express";
import { userMiddleware } from "../middleware";


export const userRouter = Router();

userRouter.post("/signup", async(req, res) => {
    const username = req.body.username;
    const passsword = req.body.password;
    
    console.log("signup handler")
    res.json({
        message: "signup endpoint hitted"
    })
});

userRouter.post("/signin", async(req, res) => {
    console.log("signin handler");
    res.json({
        message: "signup endpoint hitted"
    })
});

userRouter.get("/user", userMiddleware, async(req, res) => {
    console.log("user handler");
    res.json({
        message: "user endpoint hitted"
    })
})
