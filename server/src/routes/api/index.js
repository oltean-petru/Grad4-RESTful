import express from 'express';
import ping from './ping.js';
import users from './users.js';
import comments from './comments.js';
import categories from './categories.js';
import articles from './articles.js';
import auth from './auth.js'

const router = express.Router();

// api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/ping', ping);
router.use('/users', users);
router.use('/comments', comments);
router.use('/categories', categories);
router.use('/articles', articles);
router.use('/auth', auth)


export default router;
