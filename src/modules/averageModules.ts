import { IReturn } from '../interfaces';
import { averageValidator } from '../errors/validator';
import { calcAverage } from '../utils';

export const averageCalc = (numberOne, numberTwo) => {
  const IReturn: IReturn = { success: true, message: '', data: '', errors: [] };
  try {
    const valid: IReturn = averageValidator(numberOne, numberTwo);

    if (valid.success) {
      const result = calcAverage(numberOne, numberTwo);

      IReturn.data = result;
      return IReturn;
    }

    IReturn.success = false;
    IReturn.errors = valid.errors;
    return IReturn;
  } catch (err) {
    if (err instanceof Error) {
      IReturn.success = false;
      IReturn.errors.push(err.message);
      return IReturn;
    }
  }
};
