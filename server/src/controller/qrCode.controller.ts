import { Request, Response } from "express";
var qr = require('qr-image');
import getIPAddresses from '../util/getIPAddresses'

class qrCode {
    public async getQrCode(req: Request, res: Response) {
        try {
            var svg_string = qr.imageSync('volt/' + String(getIPAddresses()), { type: 'svg', size: 10 });

            const HTML = `<div style = "text-align: center; padding-top: 10%;">
                        <h2>Utilize o <b>IP</b> ou <b>QrCode</b> para realizar a atualização dos dados no Aplicativo Volt Orçamento </h2>
                        <h1> ${String(getIPAddresses())} </h1> ${svg_string} </div>`;
            res.send(HTML);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new qrCode();