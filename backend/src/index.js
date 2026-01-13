import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
app.listen(4000, () => console.log('Backend running on 4000'));
