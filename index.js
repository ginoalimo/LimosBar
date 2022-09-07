import express from 'express';
import cors from 'cors';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
import drinksRouter from './server/routes/drinks.routes.js'

dotenv.config();
const PORT = process.env.PORT;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(drinksRouter);
app.use(express.static(join(__dirname, "../client/dist")));
app.listen(`${PORT}`, () => {
    console.log(`Server is running on port ${PORT}`);
});
