import {z} from "zod";

export const SignupSchema = z.object({
    username: z.string().min(5).max(15),
    password: z.string().min(6).max(15),
    name: z.string().min(3).max(20),
});

export const SigninSchema = z.object({
    username: z.string(),
    password: z.string()
});