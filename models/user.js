import mongoose from "mongoose";

export default mongoose.model(
    "user",
    new mongoose.Schema({
        username: { type: String, lowercase: true, unique: true, required: true },
        email: { type: String, lowercase: true, unique: true, required: true },
        password: { type: String, required: true },
        connected: { type: Boolean, default: false }
    })
);