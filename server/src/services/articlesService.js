import articleModel from "#src/models/Articles";

const exposeServices = {

  findAllArticles: async () => {
    try {
      const allArticles = await articleModel.find({})
      return allArticles
    } catch (error) {
      throw error(error)
    }
  },

  createArticle: async (article) => {
    try {
      const newArticle = await articleModel.create(article)
      if (!newArticle) return res.sendStatus(400)
      return newArticle
    } catch (error) {
      throw error(error)
    }
  },

  oneArticleService: async ({ id: _id }) => {
    try {
      const oneArticle = await articleModel.findOne({ _id })
      if (!oneArticle) return res.sendStatus(404)
      return oneArticle
    } catch (error) {
      throw error(error)
    }
  },

  updateArticle: async (id, article) => {
    try {
      const updatedArticle = await articleModel.findByIdAndUpdate(id, article, { new: true })
      if (!updatedArticle) return res.sendStatus(400)
      return updatedArticle
    } catch (error) {
      throw error(error)
    }
  },

  updateArticlePatch: async (id, article) => {
    try {
      const updatedArticle = await articleModel.findOneAndUpdate({ _id: id }, article)
      if (!updatedArticle) return res.sendStatus(400)
      return updatedArticle
    } catch (error) {
      throw error(error)
    }
  }
}

export default exposeServices