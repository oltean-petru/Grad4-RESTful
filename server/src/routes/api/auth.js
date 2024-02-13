import express  from "express";
import authController from "#src/controllers/authController";

const router = express.Router();

router.post('/login', authController.authLogin);

export default router;