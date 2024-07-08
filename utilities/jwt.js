import jwt from "jsonwebtoken";
import config from "../config.js";

export function encode(user) {
    return jwt.sign(user, config.JWT_SECRET);
}