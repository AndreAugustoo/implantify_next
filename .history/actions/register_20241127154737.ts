"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db"
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success){
        return { error: "Campos inválidos!" };
    }

    const { email, password, name } = validatedFields.data;
    const hashedPasword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Este email já está sendo utilizado!" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPasword,
        },
    });

    //TODO: Send verification token email

    return { success: "Usuário criado com sucesso!" };
};
