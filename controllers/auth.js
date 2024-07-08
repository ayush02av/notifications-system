import user from "../models/user.js";
import { getHashedPassword, getUserResponse } from "../utilities/auth.js";

export async function register(req, res) {
    const {
        username,
        email,
    } = req.body;

    if (await user.findOne({ username })) return res.status(400).send("Username exists");
    if (await user.findOne({ email })) return res.status(400).send("Email exists");

    let { password } = req.body;
    password = await getHashedPassword(password);

    const newUser = await user.create({
        username,
        email,
        password
    });

    const response = getUserResponse(newUser);

    return res.status(201).json(response);
}