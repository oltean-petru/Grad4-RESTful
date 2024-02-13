import express from 'express';
import ping from './ping.js';
// import users from './users.js';
import comments from './comments.js';

const router = express.Router();

// api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});
// api/v1/users/
router.get('/users', async (req, res) => {
  const allU = await usersService.findAllUsers()
  res.json(allU);
});


// api/v1/ping
router.use('/ping', ping);
// router.use('/users', users);
router.use('/comment', comments);


export default router;
