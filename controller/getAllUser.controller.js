import fs from "fs";

export const getAllUser = async (req, res) => {
    try {
        const users = await fs.readFileSync("./users.json");

        res.json({
            massage: "success",
            success: true,
            data: JSON.parse(users),
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
