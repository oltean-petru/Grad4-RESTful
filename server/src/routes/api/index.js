import express from 'express';
import ping from './ping.js';
import usersService from '#src/services/usersService'
import categoryService from '#src/services/categoryService'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

/**
* USERS
*/
router.get('/users', async (req, res) => {
  const allU = await usersService.findAllUsers()
  res.json(allU);
});

router.post('/users', async (req, res) => {
  const user = req.body
  const newUser = await usersService.createUser(user)
  res.json(newUser);
});

/**
 * CATEGORY
 */

router.get('/categories', async (req, res) => {
  const allC = await categoryService.findAllCategories()
  res.json(allC);
});

router.post('/categories', async (req, res) => {
  const category = req.body
  const newCategory = await categoryService.createCategory(category)
  res.json(newCategory);
});

router.use('/ping', ping);

export default router;
