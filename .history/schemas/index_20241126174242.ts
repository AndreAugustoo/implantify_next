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
        message: "Senha precisa ter no mínimo 6 caracteres.",
    }),
    name: z.string().min(1, {
        message: "Nome é obrigatório."
    })
});