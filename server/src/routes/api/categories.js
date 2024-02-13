import express from 'express';
import categories from '#src/services/categoriesService';

const router = express.Router();

router.get('/', async (req, res) => {
  const allCategories = await categories.findAllCategories()
  res.json(allCategories);
});

router.post('/', async (req, res) => {
  const category = req.body
  const newCategory = await categories.createCategory(category)
  res.json(newCategory);
});

export default router;