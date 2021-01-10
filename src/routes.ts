import { Router } from 'express';
import { Request, Response } from "express";
import ImageController from './controllers/ImageController';
import multer from 'multer';
import uploadConfig from './config/upload';
import path from 'path';

const routes = Router();
const upload = multer(uploadConfig);

// routes.get('/orphanages/:id', OrphanagesController.show);
// routes.get('/orphanages', OrphanagesController.index);
routes.post('/images', upload.array('images') , ImageController.index);

routes.get('/', (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname, '..', 'README.md'));
})

export default routes;