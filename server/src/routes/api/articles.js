import express from 'express';
import articleController from '#src/controllers/articleController';
import cookieJwtAuth from '#src/middleware/cookieJwtAuth';

const router = express.Router();


router.get('/', cookieJwtAuth, articleController.allArticleController);
router.get('/:id', articleController.oneArticleController);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.patch('/:id', articleController.updateArticlePatch);

export default router;