import { prisma as dbClient} from "@repo/database/client";
import {kafka} from "@repo/kafka/kafka";
import { TOPIC_NAME } from "@repo/kafka/kafka";

async function main(){
    const producer = kafka.producer();
    await producer.connect();
    while(1){
        const pendingRows = await dbClient.zapRunOutbox.findMany({
            where: {},
             take: 10
        })

        
        await producer.send({
            topic: TOPIC_NAME,
            messages: 
                pendingRows.map( r => ({
                    value: r.zapRunId
                }) )
        })

        await dbClient.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingRows.map(x => x.id)
                } 
            }
        })
        
    }
}


main();