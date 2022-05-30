import { Request, Response } from 'express';
import { IReturn } from '../interfaces';
import * as messages from '../utils/messages';
import { searchCep } from '../modules/cepModules';

class cepController {
  async findCep(req: Request, res: Response) {
    try {
      const { cep } = req.params;
      const IReturn: IReturn = await searchCep(cep);

      if (IReturn.success) {
        return res.status(200).send({
          success: true,
          message: IReturn.message,
          data: IReturn.data,
          errors: [],
        });
      }

      return res.status(400).send({
        success: false,
        data: '',
        errors: IReturn.errors,
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).send({
          success: false,
          message: messages.FIND_CEP_GENERIC,
          data: '',
          errors: [err.message],
        });
      }
    }
  }
}

export default new cepController();
