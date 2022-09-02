
import { Router } from 'express';
import Controller from '../api/controllers/EmailController'

const routes = Router();
routes.post('/send', Controller.send);



export default routes;