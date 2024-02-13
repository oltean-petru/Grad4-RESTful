import authService from '#src/services/authService';

const exposeController = {
    authLogin: async (req, res) => {
        const { body } = req
        try {
            const registeredUser = await authService.authLogin(body)
            return res.json(registeredUser)
        } catch (error) {
            return res.sendStatus(400)
        }
    }
}

export default exposeController;