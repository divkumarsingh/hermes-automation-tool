import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { userRouter } from "./routes/user";
import { zapRouter } from "./routes/zap";
import {prisma as dbClient} from "@repo/database/client"

const app = express();
app.use(express.json());
app.use(cors());




app.use("/api/v1/user", userRouter);
app.use("/api/v1/zap", zapRouter);

app.listen(3007, ()=>{
    console.log("listening on port 3007")
})