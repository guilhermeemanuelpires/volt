import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ModuloEntity } from "../entity/modulo.entity";

class ModuloController {

    public async modulo(req: Request, res: Response) {
        try {
            const Modulo = await getRepository(ModuloEntity).find();
            return res.status(200).send({Modulo});
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new ModuloController();