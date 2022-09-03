import fs from "fs";

export const deleteUser = async (req, res) => {
    try {
        const id = +req.params.id;

        const data = await fs.readFileSync("./users.json");
        const allUsers = JSON.parse(data);

        const index = allUsers.findIndex((v) => v.id === id);
        if (index < 0) {
            throw new Error("Invalid User");
        }

        const deletedUser = allUsers[index];
        allUsers.splice(index, 1);

        const newData = await fs.writeFileSync(
            "./users.json",
            JSON.stringify(allUsers, null, 4)
        );

        res.json({
            massage: "successfully deleted",
            success: true,
            data: deletedUser,
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
        });
    }
};
