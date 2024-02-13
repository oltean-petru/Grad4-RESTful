import express from 'express';
import ping from './ping.js';
import usersService from '#src/services/usersService'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.get('/users', async (req, res) => {
  const allU = await usersService.findAllUsers()
  res.json(allU);
});

router.post('/users', async (req, res) => {
  const user = req.body
  const newUser = await usersService.createUser(user)
  res.json(newUser);
});



router.use('/ping', ping);

export default router;
