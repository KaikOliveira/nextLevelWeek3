import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/Upload';
import OrphanagesController from './controllers/OrphanagesController';

//Criando Rotas = http://localhost:3333/ ...
const routes = Router();
const upload = multer(uploadConfig);

routes.get( '/orphanages', OrphanagesController.index );

routes.get( '/orphanages/:id', OrphanagesController.show );

routes.post( '/orphanages', upload.array('images') ,OrphanagesController.create );


export default routes;