import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CalculoKWPEntity } from "../entity/calculoKWP.entity";

class CalculoKWPController {
  public async CalculoKWP(req: Request, res: Response) {
    try {
      const CalculoKWP = await getRepository(CalculoKWPEntity).find();
      return res.status(200).send({ CalculoKWP });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new CalculoKWPController();
