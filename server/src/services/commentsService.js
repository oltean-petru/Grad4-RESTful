import commentModel from "#src/models/Comments";

const exposeServices = {

  findAllComments: async () => {
    try {
      const allComments = await commentModel.find({})
      return allComments
    } catch (error) {
      throw error(error)
    }
  },

  createComment: async (comment) => {
    try {
      const newComment = await commentModel.create(comment)
      return newComment
    } catch (error) {
      throw error(error)
    }
  }
}

export default exposeServices
