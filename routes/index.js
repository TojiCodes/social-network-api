import express from 'express';
import apiRoutes from './api';

const router = express.Router();

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

export default router;
