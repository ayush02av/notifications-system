import express from "express";

import router from "./routers/index.js";
import config from "./config.js";
import dbConnectMongoDB from "./services/dbConnectMongoDB.js";

const app = express();
app.use(express.json());

app.listen(config.PORT, async function () {
    console.log(`Server listening on port ${config.PORT}`);
    dbConnectMongoDB();
});

app.use("/api", router);