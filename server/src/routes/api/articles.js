import express from 'express';
import articleController from '#src/controllers/articleController';

const router = express.Router();


router.get('/', articleController.allArticleController);

router.post('/', articleController.createArticle);

export default router;