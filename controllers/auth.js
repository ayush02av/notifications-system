import user from "../models/user.js";
import { comparePassword, getHashedPassword, getUserResponse } from "../utilities/auth.js";

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

export async function login(req, res) {
    const {
        username,
        password
    } = req.body;

    const userCheck = await user.findOne({ username });
    if (!userCheck) return res.status(404).send("User not found");

    const passwordCheck = await comparePassword(password, userCheck.password);
    if (!passwordCheck) return res.status(401).send("Password is incorrect");

    const response = getUserResponse(userCheck);
    return res.status(200).json(response);
}