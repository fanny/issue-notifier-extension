import express from 'express';
import { register, watch } from './controller';

const apiRoute = express.Router();

apiRoute.post('/register', register);
apiRoute.post('/watch', watch);

export default apiRoute;