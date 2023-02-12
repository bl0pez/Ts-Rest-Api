import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { router } from './routes';
import dbConnect from './config/mongo';


const app = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());
app.use(express.json());

//Base de datos
dbConnect();


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});