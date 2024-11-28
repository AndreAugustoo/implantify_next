import { v4 as uuidv4 } from "uuid";

export const genereateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    
}