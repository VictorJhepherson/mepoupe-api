import { IReturn } from '../../../interfaces';
import { addressOne, addressTwo } from '../../../utils';
import * as messages from '../../../utils/messages';
import {
  cepValidator,
  neighborhoodValidator,
  averageValidator,
} from '../../../errors/validator';

describe('test cepValidator function', () => {
  it('should return IReturn(success) for cepValidator(18150000)', () => {
    const IReturn: IReturn = {
      success: true,
      message: '',
      data: '',
      errors: [],
    };

    expect(cepValidator('18150000')).toStrictEqual(IReturn);
  });

  it('should return IReturn(failure) for cepValidator(18150-000)', () => {
    const IReturn: IReturn = {
      success: false,
      message: '',
      data: '',
      errors: ['CEP inválido!'],
    };

    expect(cepValidator('18150-000')).toStrictEqual(IReturn);
  });
});

describe('test neighborhoodValidator function', () => {
  it('should return IReturn(success) for neighborhoodValidator(address)', () => {
    const message = messages.FIND_NEIGHBORHOOD_SUCCESS;

    expect(neighborhoodValidator(addressTwo)).toStrictEqual(message);
  });

  it('should return IReturn(failure) for neighborhoodValidator(address)', () => {
    const message = messages.FIND_NEIGHBORHOOD_FAILURE;

    expect(neighborhoodValidator(addressOne)).toStrictEqual(message);
  });
});

describe('test averageValidator function', () => {
  it('should return IReturn(success) for averageValidator(10, 10)', () => {
    const IReturn: IReturn = {
      success: true,
      message: '',
      data: '',
      errors: [],
    };

    expect(averageValidator(10, 10)).toStrictEqual(IReturn);
  });

  it('should return IReturn(failure) - Error 1 for averageValidator(10, undefined)', () => {
    const IReturn: IReturn = {
      success: false,
      message: '',
      data: '',
      errors: ['Há campos em branco! Preencha todos os campos.'],
    };

    expect(averageValidator(10, undefined)).toStrictEqual(IReturn);
  });

  it('should return IReturn(failure) - Error 2 for averageValidator(10, "me poupe")', () => {
    const IReturn: IReturn = {
      success: false,
      message: '',
      data: '',
      errors: ['Os campos devem ser numéricos!'],
    };

    expect(averageValidator(10, 'me poupe')).toStrictEqual(IReturn);
  });
});
