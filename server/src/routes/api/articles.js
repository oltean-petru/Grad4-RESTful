import express from 'express';
import articleController from '#src/controllers/articleController';

const router = express.Router();


router.get('/', (req, res) => {
  const allArticles = articleController.allArticleController()
  res.json(allArticles);
});

router.post('/', (req, res) => {
  const article = req.body
  const newArticle = articleController.createArticle(article)
  res.json(newArticle);
});

export default router;