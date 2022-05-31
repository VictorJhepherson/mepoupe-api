import { IReturn } from '../interfaces';
import { averageValidator } from '../errors/validator';
import { calcAverage } from '../utils';
import { logger } from '../utils/logger';

export const averageCalc = (numberOne, numberTwo) => {
  const IReturn: IReturn = { success: true, message: '', data: '', errors: [] };
  try {
    logger.info(`Realizando validação dos dados enviados.`);
    const valid: IReturn = averageValidator(numberOne, numberTwo);

    if (valid.success) {
      logger.info(`Validação realizada com sucesso.`);
      logger.info(`Realizando calculo da média.`);
      const result = calcAverage(numberOne, numberTwo);

      IReturn.data = result;
      logger.info(`Calculo realizado com sucesso.`);
      return IReturn;
    }

    logger.info(`Validação falhou com o erro: ${valid.errors}`);
    IReturn.success = false;
    IReturn.errors = valid.errors;
    return IReturn;
  } catch (err) {
    if (err instanceof Error) {
      logger.info(`Erro ao tentar calcular a média: ${err.message}`);
      IReturn.success = false;
      IReturn.errors.push(err.message);
      return IReturn;
    }
  }
};
