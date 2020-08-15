import { Router } from 'express';
import disjEntradaController from '../controller/disjEntrada.controller';

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', disjEntradaController.DisjutorController);
    }

}


export default new Routes().router;