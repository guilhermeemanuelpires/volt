import { Router } from 'express';
import tipoInstalacaoController from '../controller/tipoInstalacao.controller';


class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', tipoInstalacaoController.Tipo);
    }

}


export default new Routes().router;