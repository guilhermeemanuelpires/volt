import { Router } from 'express';
import calculoKWPController from '../controller/calculoKWP.controller';


class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', calculoKWPController.CalculoKWP);
    }

}


export default new Routes().router;