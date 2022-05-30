import { Request, Response } from 'express';
import { IReturn } from '../interfaces';
import * as messages from '../utils/messages';
import { averageCalc } from '../modules/averageModules';

class averageController {
  calc(req: Request, res: Response) {
    try {
      const { numberOne, numberTwo } = req.body;

      const IReturn: IReturn = averageCalc(numberOne, numberTwo);

      if (IReturn.success) {
        return res.status(200).send({
          success: true,
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
          message: messages.CALC_AVERAGE_GENERIC,
          data: '',
          errors: [err.message],
        });
      }
    }
  }
}

export default new averageController();
