import { Router } from 'express';
import TarifasController from '../controller/tarifas.controller';

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', TarifasController.Tarifa);
    }

}


export default new Routes().router;