import express from 'express';
import { register, watch} from './controller';

const route = express.Router();

route.post('/register', register);
route.post('/watch', watch);

export default route;