import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DisjuntorEntity } from "../entity/disjEntrada.entity";
class DisjutorController {
  public async DisjutorController(req: Request, res: Response) {
    try {
      const Disjutores = await getRepository(DisjuntorEntity).find({
        relations: ["cod_padrao"],
      });
      return res.status(200).send({ Disjutores });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new DisjutorController();
