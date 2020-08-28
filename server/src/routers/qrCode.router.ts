import { Router } from 'express';
import QrCodeController from '../controller/qrCode.controller';

class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    
    private init() {
        this.router.get('/', QrCodeController.getQrCode);
    }

}


export default new Routes().router;