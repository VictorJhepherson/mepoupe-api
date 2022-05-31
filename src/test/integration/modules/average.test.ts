import { IReturn } from '../../../interfaces';
import { averageCalc } from '../../../modules/averageModules';

describe('test averageCalc function', () => {
  it('should return IReturn(success) for averageCalc(10, 10)', () => {
    const IReturn: IReturn = {
      success: true,
      message: '',
      data: 10,
      errors: [],
    };

    expect(averageCalc(10, 10)).toStrictEqual(IReturn);
  });

  it('should return IReturn(failure) - Error 2 for averageCalc(10, undefined)', () => {
    const IReturn: IReturn = {
      success: false,
      message: '',
      data: '',
      errors: ['Há campos em branco! Preencha todos os campos.'],
    };

    expect(averageCalc(10, undefined)).toStrictEqual(IReturn);
  });

  it('should return IReturn(failure) - Error 2 for averageCalc(10, "me poupe")', () => {
    const IReturn: IReturn = {
      success: false,
      message: '',
      data: '',
      errors: ['Os campos devem ser numéricos!'],
    };

    expect(averageCalc(10, 'me poupe')).toStrictEqual(IReturn);
  });
});
