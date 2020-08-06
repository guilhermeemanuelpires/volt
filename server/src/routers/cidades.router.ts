import { Router } from 'express';
import CidadesController from '../controller/cidades.controller';

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', CidadesController.cidades);
    }

}


export default new Routes().router;