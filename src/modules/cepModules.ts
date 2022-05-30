import api from '../services/api';
import { IReturn } from '../interfaces';
import cache from '../utils/cache';
import { cepValidator, neighborhoodValidator } from '../errors/validator';
import { timeExp } from '../utils';

export const searchCep = async (cep: string) => {
  const IReturn: IReturn = { success: true, message: '', data: '', errors: [] };
  try {
    const valid: IReturn = cepValidator(cep);

    if (valid.success) {
      const cached = await cache.get(cep);

      if (cached) {
        const message: string = neighborhoodValidator(cached);

        IReturn.message = message;
        IReturn.data = cached;
        return IReturn;
      }

      const response = await api.get(`/ws/${cep}/json/`);

      if (response) {
        cache.set(cep, response.data, timeExp);
        const message: string = neighborhoodValidator(response.data);

        IReturn.message = message;
        IReturn.data = response.data;
        return IReturn;
      }
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
