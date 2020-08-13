import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { cidadeMediaEntity } from "../entity/cidadeMedia.entity";

class CidadeMediaController {

    public async cidadesMedia(req: Request, res: Response) {
        try {
            const Media = await getRepository(cidadeMediaEntity).find();
            return res.status(200).send({Media});
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new CidadeMediaController();