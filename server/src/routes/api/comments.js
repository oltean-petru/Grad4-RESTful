import express from 'express';
import commentsService from '#src/services/commentsService';

const router = express.Router();

router.get('/', async (req, res) => {
  const allComments = await commentsService.findAllComments()
  res.json(allComments);
});

router.post('/', async (req, res) => {
  const comment = req.body
  const newComment = await commentsService.createComment(comment)
  res.json(newComment);
});

export default router;
