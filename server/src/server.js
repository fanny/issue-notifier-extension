import express from 'express';
import cors from 'cors';
import route from './routes/api/route';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/', route);

app.listen(port);

console.log('app running on port', port);