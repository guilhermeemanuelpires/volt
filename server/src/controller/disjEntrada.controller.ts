import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DisjuntorEntity } from "../entity/disjEntrada.entity";
class DisjutorController {

    public async DisjutorController(req: Request, res: Response) {
        try {
            const Disjutor = await getRepository(DisjuntorEntity).find();
            return res.status(200).send({Disjutor});
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new DisjutorController();