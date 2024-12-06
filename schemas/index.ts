import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(
      z.string().min(6, {
        message: "Senha precisa ter no mínimo 6 caracteres.",
      })
    ),
    newPassword: z.optional(
      z.string().min(6, {
        message: "Senha precisa ter no mínimo 6 caracteres.",
      })
    ),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "Nova senha é obrigatória!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Senha é obrigatória!",
      path: ["password"],
    }
  );

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email é obrigatório",
  }),
  password: z.string().min(1, {
    message: "Senha é obrigatória",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email é obrigatório",
  }),
  password: z.string().min(6, {
    message: "Senha precisa ter no mínimo 6 caracteres.",
  }),
  name: z.string().min(1, {
    message: "Nome é obrigatório.",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email é obrigatório",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Senha precisa ter no mínimo 6 caracteres.",
  }),
});
