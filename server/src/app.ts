import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import ModuloRouter  from './routers/modulo.router';
import CidadesRouter from './routers/cidade.router';
import cidadeMediaRouter from './routers/cidadeMedia.router';
import tarifasRouter from './routers/tarifas.router';
import padroesEntradaRouter from './routers/padroesEntrada.router';

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
        this.express.use('/modulo', ModuloRouter);
        this.express.use('/media', cidadeMediaRouter);
        this.express.use('/cidade', CidadesRouter);
        this.express.use('/padroes', padroesEntradaRouter);
        this.express.use('/tarifas', tarifasRouter);
    }

}

export default new App().express;