import express from 'express';
import usersService from '#src/services/usersService';

const router = express.Router();

router.get('/', async (req, res) => {
  const allU = await usersService.findAllUsers()
  res.json(allU);
});

router.post('/', async (req, res) => {
  const user = req.body
  const newUser = await usersService.createUser(user)
  res.json(newUser);
});

export default router;