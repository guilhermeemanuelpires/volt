import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(cors());
    }
        
    private routes(): void {
        // this.express.use('/usuario', usuarioRouter);     
    }

}

export default new App().express;