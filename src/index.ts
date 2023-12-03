// src/index.ts
import express, { Request, Response } from 'express';
import { sequelize } from './config/dbConnect';
import employeeRoute from './routes/employeeRoute';
require('dotenv').config();
const app = express();
const port: string | undefined = process.env.APP_PORT;
const baseApi: string = "/api/v1"
app.use(express.json());

app.listen(port, () => {
    console.log(`Uygulama http://localhost:${port} adresinde çalışıyor.`);
});

app.use(baseApi, employeeRoute);

sequelize
    .sync()
    .then(() => {
        console.log('PostgreSQL database connected');
    })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });