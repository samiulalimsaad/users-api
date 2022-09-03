import express from "express";
import { addNewUser } from "./controller/addNewUser.controller.js";
import { deleteUser } from "./controller/deleteUser.controller.js";
import { getAllUser } from "./controller/getAllUser.controller.js";
import { getRandomUser } from "./controller/getRandomUser.controller.js";
import { updateUser } from "./controller/updateUser.controller.js";

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

app.get("/user/all", getAllUser);
app.get("/user/random", getRandomUser);
app.post("/user/save", addNewUser);
app.patch("/user/update/:id", updateUser);
app.delete("/user/delete/:id", deleteUser);

app.listen(PORT, () =>
    console.log(`server is running at http://localhost:${PORT}`)
);
