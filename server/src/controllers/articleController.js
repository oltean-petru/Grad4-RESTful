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
    }
}

export default exposeController;