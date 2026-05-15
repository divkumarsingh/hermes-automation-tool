import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "hermes-topic",
    brokers: ["localhost:9092"]
});

export const TOPIC_NAME = "hermes-queue";

export {kafka};