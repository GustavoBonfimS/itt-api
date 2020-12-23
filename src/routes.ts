import { Router } from 'express';
import ImageController from './controllers/ImageController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

// routes.get('/orphanages/:id', OrphanagesController.show);
// routes.get('/orphanages', OrphanagesController.index);
routes.post('/images', upload.array('images') , ImageController.index);

export default routes;