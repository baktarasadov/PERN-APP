// src/index.ts
import express, { Request, Response } from 'express';
import { sequelize } from './config/dbConnect';
require('dotenv').config();
const app = express();

const port: string | undefined = process.env.APP_PORT;
app.use(express.json());

app.get('/alma/:id', (request: Request, response: Response) => {
    const id: string = request.params.id;

    console.log(id);
    console.log(request.body);

    response.status(600).json({ message: "Hello World!" });
});

app.listen(port, () => {
    console.log(`Uygulama http://localhost:${port} adresinde çalışıyor.`);
});

sequelize
    .sync()
    .then(() => {
        console.log('PostgreSQL database connected');
    })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });