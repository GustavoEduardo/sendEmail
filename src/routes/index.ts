import { Router } from 'express';
import EmailRoutes from './Email.routes';

const routes = Router();

routes.use(EmailRoutes);

export default routes;

