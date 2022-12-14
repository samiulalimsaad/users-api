import fs from "fs";
import { validateData } from "../utils/validData.js";

const getId = (users) =>
    users.reduce((id, obj) => Math.max(id, obj.id), -1) + 1;

export const updateUser = async (req, res) => {
    try {
        const { gender, name, contact, address, photoUrl } = req.body;
        const id = +req.params.id;

        const validData = validateData({
            gender,
            name,
            contact,
            address,
            photoUrl,
        });

        const data = await fs.readFileSync("./users.json");
        const allUsers = JSON.parse(data);

        const index = allUsers.findIndex((v) => v.id === id);
        if (index < 0) {
            throw new Error("Invalid User");
        }

        Object.keys(validData).map((v) => {
            allUsers[index][v] = validData[v];
        });

        const newData = await fs.writeFileSync(
            "./users.json",
            JSON.stringify(allUsers, null, 4)
        );

        res.json({
            massage: "successfully updated",
            success: true,
            data: allUsers[index],
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
