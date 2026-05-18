import {z} from "zod";

export const SignupSchema = z.object({
    username: z.string().min(5).max(25),
    password: z.string().min(6).max(15),
    name: z.string().min(3).max(20),
});

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string()
});

export const ZapCreateSchema = z.object({
    availableTriggerId: z.string(),
    triggerMetaData : z.any().optional(),
    actions: z.array(z.object({
        availableActionId: z.string(),
        actionMetadata: z.any().optional()
    }))
});

