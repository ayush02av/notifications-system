import mongoose from 'mongoose';
import config from '../config.js';

export default function () {
    mongoose
        .connect(
            config.MONGODB_URI
        )
        .then(function (data) {
            console.log("Connected to Mongodb");
        })
        .catch(function (err) {
            console.log("ERROR IN CONNECTING TO MONGODB");
            console.error(err);
        });
};