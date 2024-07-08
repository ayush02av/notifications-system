import express from "express";
import { register, login } from "../controllers/auth.js";

const router = express.Router();

router.post(
    "/register",
    async function (req, res) {
        try {
            await register(req, res);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
);

router.post(
    "/login",
    async function (req, res) {
        try {
            await login(req, res);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
)

export default router;