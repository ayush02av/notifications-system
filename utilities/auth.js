import bcrypt from "bcrypt";
import { encode } from "../utilities/jwt.js";

export function getUserResponse(user) {
    const response = {
        user: {
            username: user.username,
            email: user.email
        },
    };
    response.token = encode(response.user);
    return response;
}

export async function getHashedPassword(password) {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    } catch (error) {
        throw new Error(error);
    }
}

export async function comparePassword(passwordAttempt, passwordCorrect) {
    try {
        const match = await bcrypt.compare(passwordAttempt, passwordCorrect);
        return match;
    } catch (error) {
        throw new Error(error);
    }

}