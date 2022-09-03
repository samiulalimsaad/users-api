import fs from "fs";
import { validateData } from "../utils/validData.js";

export const bulkUpdateUser = async (req, res) => {
    try {
        const users = req.body?.users;
        const data = await fs.readFileSync("./users.json");
        const allUsers = JSON.parse(data);

        const updatedUsers = [];

        users?.map((user) => {
            const { id, gender, name, contact, address, photoUrl } = user;
            const validData = validateData({
                gender,
                name,
                contact,
                address,
                photoUrl,
            });
            const index = allUsers.findIndex((v) => v.id === id);
            if (index < 0) {
                throw new Error("Invalid User");
            }
            const temp = {};
            Object.keys(validData).map((v) => {
                allUsers[index][v] = validData[v];
                temp[v] = validData[v];
            });
            updatedUsers.push(temp);
        });

        const newData = await fs.writeFileSync(
            "./users.json",
            JSON.stringify(allUsers, null, 4)
        );

        res.json({
            massage: "successfully updated",
            success: true,
            data: updatedUsers,
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
