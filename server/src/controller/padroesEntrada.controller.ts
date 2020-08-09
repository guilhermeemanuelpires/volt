import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { PadroesEntradaEntity } from "../entity/padroesEntrada.entity";

class padroesEntradaController {

    public async Padroes(req: Request, res: Response) {
        try {
            const Padroes = await getRepository(PadroesEntradaEntity).find();
            return res.status(200).send({Padroes});
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new padroesEntradaController();