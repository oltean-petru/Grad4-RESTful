import express from 'express';
import articleController from '#src/controllers/articleController';

const router = express.Router();


router.get('/', articleController.allArticleController);
router.get('/:id', articleController.oneArticleController);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);

export default router;