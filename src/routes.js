import express from 'express';

import DoctorController from './controllers/DoctorController';
import PacientController from './controllers/PacientController';

import corsMiddleware from './middlewares/corsMiddleware';
import fieldsMiddleware from './middlewares/fieldsMiddleware';

const routes = express.Router();

const doctorController = new DoctorController()
const pacientController = new PacientController();

routes.post('/register', corsMiddleware, fieldsMiddleware, doctorController.createUser);
routes.post('/login', corsMiddleware, fieldsMiddleware, doctorController.userLogin);

export default routes;