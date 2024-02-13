import categoryModel from "#src/models/Categories";

const exposeServices = {

  findAllCategories: async () => {
    try {
      const allCategories = await categoryModel.find({})
      return allCategories
    } catch (error) {
      throw error(error)
    }
  },

  createCategory: async (category) => {
    try {
      const newCategory = await categoryModel.create(category)
      return newCategory
    } catch (error) {
      throw error(error)
    }
  }
}

export default exposeServices