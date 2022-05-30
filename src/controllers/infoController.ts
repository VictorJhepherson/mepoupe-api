import { Request, Response } from 'express';
import { infoAPI } from '../utils';

class infoController {
  infoApi(req: Request, res: Response) {
    try {
      return res.status(200).send({
        success: true,
        data: infoAPI,
        errors: [],
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).send({
          success: false,
          data: '',
          errors: [err.message],
        });
      }
    }
  }
}

export default new infoController();
