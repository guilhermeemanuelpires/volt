import { Router } from 'express';
import cidadeMediaEntity from '../controller/cidadeMedia.controller';

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', cidadeMediaEntity.cidadesMedia);
    }

}


export default new Routes().router;