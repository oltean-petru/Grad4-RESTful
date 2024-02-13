import authService from '#src/services/authService';

const exposeController = {
    authLogin: async (req, res) => {
        const { body } = req
        const user = await authService.authLogin(body)
        if (!user) {
            return res.sendStatus(401)
        }
        return res.json(registeredUser)
    }
}

export default exposeController;