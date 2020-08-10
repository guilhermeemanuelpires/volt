import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TarifasEntity } from "../entity/tarifas.entity";

class TarifasController {

    public async Tarifa(req: Request, res: Response) {
        try {
            const Tarifa = await getRepository(TarifasEntity).find();
            return res.status(200).send({Tarifa});
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new TarifasController();