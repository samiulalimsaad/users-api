import fs from "fs";

export const getAllUser = async (req, res) => {
    try {
        const data = await fs.readFileSync("./users.json");

        const _limit = +req.query._limit || 5;
        const allUsers = JSON.parse(data);

        const users = allUsers.slice(0, _limit);

        res.json({
            massage: "success",
            success: true,
            data: users,
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
