import usersServices from '#src/services/userServices';

const exposeController = {
    allUserController: async (req, res) => {
        const allUsers = await usersServices.findAllUsers();
        return res.json(allUsers)
    }
}


export default exposeController;