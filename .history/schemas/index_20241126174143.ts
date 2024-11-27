import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email é obrigatório",
    }),
    password: z.string().min(1 ,{
        message: "Senha é obrigatória",
    })
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email é obrigatório",
    }),
    password: z.string().min(6 ,{
        message: "Senha é obrigatória",
    })
});