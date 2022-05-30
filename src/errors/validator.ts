import { isEmpty, isCep } from '../utils';
import * as messages from '../utils/messages';
import { IReturn } from '../interfaces';

export const cepValidator = (cep: string) => {
  const IReturn: IReturn = { success: true, message: '', data: '', errors: [] };

  if (isEmpty(cep) || !isCep(cep)) {
    IReturn.success = false;
    IReturn.errors.push('CEP inválido!');
    return IReturn;
  }

  return IReturn;
};

export const neighborhoodValidator = (data) => {
  let message: string;

  if (isEmpty(data.bairro)) {
    message = messages.FIND_NEIGHBORHOOD_FAILURE;
    return message;
  }

  message = messages.FIND_NEIGHBORHOOD_SUCCESS;
  return message;
};

export const averageValidator = (numberOne, numberTwo) => {
  const IReturn: IReturn = { success: true, message: '', data: '', errors: [] };

  if (isEmpty(numberOne) || isEmpty(numberTwo)) {
    IReturn.success = false;
    IReturn.errors.push('Há campos em branco! Preencha todos os campos.');
    return IReturn;
  }

  if (isNaN(Number(numberOne)) || isNaN(Number(numberTwo))) {
    IReturn.success = false;
    IReturn.errors.push('Os campos devem ser números!');
    return IReturn;
  }

  return IReturn;
};
