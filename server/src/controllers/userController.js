import usersServices from '#src/services/usersService';

const exposeController = {
    allUserController: async (req, res) => {
        const allUsers = await usersServices.findAllUsers();
        return res.json(allUsers)
    },

    createUserController: async (req, res) => {
        const user = req.body;
        const newUser = await usersServices.createUser(user);
        return res.json(newUser);
    }
}


export default exposeController;