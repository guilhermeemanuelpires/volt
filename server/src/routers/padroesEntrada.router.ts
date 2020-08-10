import { Router } from 'express';
import padroesEntradaController from '../controller/padroesEntrada.controller';

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', padroesEntradaController.Padroes);
    }

}


export default new Routes().router;