  
import express from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionsController from './controller/ConnectionController';

const routes = express.Router();
const classesContoller = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesContoller.index);
routes.post('/classes', classesContoller.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;