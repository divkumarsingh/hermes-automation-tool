import { Router } from "express";
import { userMiddleware } from "../../middleware";
import { prisma as dbClient} from "@repo/database/client";
import { ZapCreateSchema } from "@repo/types/types";


export const zapRouter = Router();

zapRouter.post("/", userMiddleware, async(req, res) => {
    const userId = (req as any).id;
    const body = req.body;
    const parsedData = ZapCreateSchema.safeParse(body);

    if(!parsedData.success){
        return res.status(411).json({msg: "Incorrect format of zap"})}
    
    
    console.log(parsedData.data.availableTriggerId);
    
    try{
        const zapId = await dbClient.$transaction(async tx => {
            const zap = await dbClient.zap.create({
                data : {
                    userId: userId,
                    triggerId: "",
                    actions: {
                        create: parsedData.data.actions.map((x, index) => ({
                            actionId: x.availableActionId,
                            sortingOrder: index
                        }))
                    },
                    
                }
            })
            const trigger = await tx.trigger.create({
                data: {
                    triggerId: parsedData.data.availableTriggerId,
                    zapId: zap.id
                }
            })

            await dbClient.zap.update({
                where: {
                    id: zap.id
                },
                data: {
                    triggerId: trigger.id
                }
            })
            return zap.id;
        })
        res.json({
            zapId
        })
        
       

    } catch(err){
        console.log(err);
        res.json({
        msg: "fail to put data into database"
    })
}
    
})

zapRouter.get("/",  userMiddleware, async(req, res) => {
    
    const userId = (req as any).id;
    const zaps = await dbClient.zap.findMany({
        where: {
            userId: userId
        },
        include: {
            actions: {
                include: {
                    type: true
                }
            },
            trigger: {
                include: {
                    type: true
                }
            }
        }
    }) 

    res.json({
        zaps
    })
});

zapRouter.get("/:zapId",  userMiddleware, async(req, res) => {
    const userId = (req as any).id;
    const zapId = (req.params.zapId) as string;

    const zap = await dbClient.zap.findMany({
        where: {
            id: zapId,
            userId: userId
        },
        include: {
            actions: {
                include: {
                    type: true
                }
            },
            trigger: {
                include: {
                    type: true
                }
            }
        }
   })

   return res.json({
        zap
   })
});

