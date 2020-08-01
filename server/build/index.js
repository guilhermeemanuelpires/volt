"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const http = require("http");
const app_1 = require("./app");
typeorm_1.createConnection().then(connection => {
    const server = http.createServer(app_1.default);
    server.listen(3000, () => {
        console.log('Applicação está rodando na porta 3000');
    });
}).catch(error => {
    console.log('TypeORM dont connected: %s', error);
});
//# sourceMappingURL=index.js.map