import express from 'express';
import userController from '#src/controllers/userController';

const router = express.Router();

router.get('/', userController.allUserController);

router.post('/', userController.createUser);

export default router;