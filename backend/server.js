import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDB from './config.js';
import router from "./Routes/routes.js";
dotenv.config();
const port = process.env.PORT
// middleware

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended:true }));

connectToDB();

app.use('/',router);

app.listen(port,() => console.log(`server is listening on ${port}`));

