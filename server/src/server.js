import express from 'express';
import cors from 'cors';
import apiRoute from './routes/api/route';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/', apiRoute);

app.listen(port);

console.log('app running on port', port);