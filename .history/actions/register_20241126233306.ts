"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { db } from "@/lib/db"
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success){
        return { error: "Campos inválidos!" };
    }

    const { email, password, name } = validatedFields.data;
    const hashedPasword = await bcrypt.hash(password, 10);



    return { success: "Email enviado!" };
};
