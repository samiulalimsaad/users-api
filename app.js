import express from "express";
import { addNewUser } from "./controller/addNewUser.controller copy.js";
import { getAllUser } from "./controller/getAllUser.controller.js";
import { getRandomUser } from "./controller/getRandomUser.controller.js";

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

app.get("/user/all", getAllUser);
app.get("/user/random", getRandomUser);
app.post("/user/save", addNewUser);

app.listen(PORT, () =>
    console.log(`server is running at http://localhost:${PORT}`)
);
