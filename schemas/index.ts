import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email é obrigatório",
    }),
    password: z.string().min(1 ,{
        message: "Senha é obrigatória",
    }),
    code: z.optional(z.string()),
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
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email é obrigatório",
    })
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6 ,{
        message: "Senha precisa ter no mínimo 6 caracteres.",
    })
});