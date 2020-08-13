import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CidadesEntity } from "../entity/cidade.entity";

class CidadesController {
  public async cidades(req: Request, res: Response) {
    try {
      const Cidades = await getRepository(CidadesEntity).find({
        select: ["nome", "cep"],
        order: {
          nome: "ASC"
        },
      });
      return res.status(200).send({ Cidades });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new CidadesController();
