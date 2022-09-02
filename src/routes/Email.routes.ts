
import { Router } from 'express';
import Controller from '../api/controllers/EmailController'

const routes = Router();
routes.post('/send-email', Controller.send);



export default routes;