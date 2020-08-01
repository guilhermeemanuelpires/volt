import { createConnection } from 'typeorm';
import * as http from 'http';
import app from './app';
import getIPAddresses from './util/getIPAddresses'

createConnection().then(connection => {

    const server = http.createServer(app);

    server.listen(3000, () => {
        console.log('Applicação está rodando na porta 3000');
        console.log('O IP de Atualização é '  + getIPAddresses());        
        
    });

}).catch(error => {
    console.log('TypeORM dont connected: %s', error);
});