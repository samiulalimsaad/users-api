import express from "express";
import { getAllUser } from "./controller/getAllUser.controller.js";
import { getRandomUser } from "./controller/getRandomUser.controller.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/user/all", getAllUser);
app.get("/user/random", getRandomUser);

app.listen(PORT, () =>
    console.log(`server is running at http://localhost:${PORT}`)
);
