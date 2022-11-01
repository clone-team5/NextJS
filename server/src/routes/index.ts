import express, { Router } from 'express';
const router = express.Router();

import productRoutes from './product';
import userRoutes from './user';

router.use('/product',productRoutes);
router.use('/users',userRoutes);

export default router;
