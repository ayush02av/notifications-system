import mongoose from "mongoose";

export default mongoose.model(
    "notification",
    new mongoose.Schema({
        userID: { type: mongoose.Schema.ObjectId, required: true },
        message: { type: String, required: true },
        read: { type: Boolean, default: false }
    })
);