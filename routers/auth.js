import express from "express";
import { register } from "../controllers/auth.js";

const router = express.Router();

router.post(
    "/register",
    async function (req, res) {
        try {
            await register(req, res);
        } catch (error) {
            console.log("outer error");
            console.log(error);
            res.status(500).send(error);
        }
    }
);

export default router;