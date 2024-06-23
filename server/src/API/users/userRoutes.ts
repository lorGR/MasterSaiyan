import express from 'express';
import { loginUser } from './userCtrl';
const router = express.Router();

router
    .post("/login", loginUser)

export default router;