import express from "express";
import cors from "cors"
import { prisma as dbClient} from "@repo/database/client";

const app = express();
app.use(express.json());
app.use(cors);


app.post("hooks/catch/:userId/:zapId", async(req, res)=> {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    await dbClient.$transaction(async tx => {
        const run = await tx.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        })
        await tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id,
            }
        })
    })

    res.json({
        message: "recieved the message",
        data: {
            zapId,
            userId,
            body
        }
    })

})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})