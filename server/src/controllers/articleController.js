import articleService from '#src/services/articlesService';

const exposeController = {
    allArticleController: async (req, res) => {
        const allArticles = await articleService.findAllArticles();
        return res.json(allArticles)
    },

    createArticle: async (req, res) => {
        const { body } = req
        try {
            const registeredArticle = await articleService.createArticle(body)
            return res.json(registeredArticle)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    oneArticleController: async (req, res) => {
        const { id } = req.params
        try {
            const oneArticle = await articleService.oneArticleService(id)
            return res.json(oneArticle)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    updateArticle: async (req, res) => {
        const { id } = req.params
        const { body } = req
        try {
            const updatedArticle = await articleService.updateArticle(id, body)
            return res.json(updatedArticle)
        } catch (error) {
            return res.sendStatus(400)
        }
    }
}

export default exposeController;