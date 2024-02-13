import usersService from '#src/services/usersService';

const exposeController = {
    allUserController: async (req, res) => {
        const allUsers = await usersServices.findAllUsers();
        return res.json(allUsers)
    },

    createUser:async (req,res)=>{
        const {body}  = req
        try {
                const registeredUser = await usersService.createUser(body)     
                return res.json(registeredUser)
            } catch (error) {
               return res.sendStatus(400)
        }
    }
}


export default exposeController;