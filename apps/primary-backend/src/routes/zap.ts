import { Router } from "express";
import { userMiddleware } from "../../middleware";
import { prisma as dbClient} from "@repo/database/client";


export const zapRouter = Router();

zapRouter.post("/", userMiddleware, async(req, res) => {
    console.log("create end point");
    res.json({
        message: "zap post endpoint hitted"
    })
});

zapRouter.get("/:zapId",  userMiddleware, async(req, res) => {
    console.log("get end point")
    res.json({
        message: "zap get endpoint hitted"
    })
});

zapRouter.delete("/:zapId",  userMiddleware, async(req, res) => {
    console.log("delete endpoint hit ");
    res.json({
        message: "zap delete endpoint hitted"
    })
});

