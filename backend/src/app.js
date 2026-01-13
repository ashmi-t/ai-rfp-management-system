import express from 'express';
import cors from 'cors';
import rfpRoutes from './routes/rfp.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/rfps', rfpRoutes);
export default app;