import { Router } from 'express';
import ModuloController from '../controller/modulo.controller';

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', ModuloController.modulo);
    }

}


export default new Routes().router;