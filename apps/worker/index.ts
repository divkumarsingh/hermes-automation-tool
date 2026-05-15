import {kafka, TOPIC_NAME} from "@repo/kafka/kafka";

async function main() {
    const consumer = kafka.consumer({
        groupId: "main-worker"
    })
    await consumer.connect();
    await consumer.subscribe({topic: TOPIC_NAME, fromBeginning: true})
    await consumer.run({
        autoCommit: false,
        eachMessage: async({topic, partition, message}) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value?.toString()
            })
            //logic or work to do
            await new Promise(r => setTimeout(r, 1000))
            //

            // 
            await consumer.commitOffsets([{
                topic: TOPIC_NAME,
                partition: partition,
                offset: (parseInt(message.offset) + 1).toString()
            }])
        },
    })
}