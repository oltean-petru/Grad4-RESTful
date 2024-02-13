import express from 'express';
import articles from '#src/services/articlesService';

const router = express.Router();


router.get('/', (req, res) => {
  const allArticles = articles.findAllArticles()
  res.json(allArticles);
});

router.post('/', (req, res) => {
  const article = req.body
  const newArticle = articles.createArticle(article)
  res.json(newArticle);
});

export default router;