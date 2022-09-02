import fs from "fs";

export const getRandomUser = async (req, res) => {
    try {
        const data = await fs.readFileSync("./users.json");

        const users = JSON.parse(data);

        const index = Math.floor(Math.random() * users?.length);

        res.json({
            massage: "success",
            success: true,
            data: users[index],
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
