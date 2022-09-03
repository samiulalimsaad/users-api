import fs from "fs";
import { validateData } from "../utils/validData.js";

const getId = (users) =>
    users.reduce((id, obj) => Math.max(id, obj.id), -1) + 1;

export const addNewUser = async (req, res) => {
    try {
        const { gender, name, contact, address, photoUrl } = req.body;

        const validData = validateData({
            gender,
            name,
            contact,
            address,
            photoUrl,
        });

        const data = await fs.readFileSync("./users.json");

        // const _limit = +req.query._limit || 5;
        const allUsers = JSON.parse(data);

        const id = getId(allUsers);
        validData.id = id;

        allUsers.push(validData);

        const newData = await fs.writeFileSync(
            "./users.json",
            JSON.stringify(allUsers, null, 4)
        );

        // const users = allUsers.slice(0, _limit);

        res.json({
            massage: "success",
            success: true,
            data: validData,
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
