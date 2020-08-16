import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TipoInstalacaoEntity } from "../entity/tipoInstalacao.entity";

class TarifasController {

    public async Tipo(req: Request, res: Response) {
        try {
            const Tipos = await getRepository(TipoInstalacaoEntity).find();
            return res.status(200).send({Tipos});
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new TarifasController();