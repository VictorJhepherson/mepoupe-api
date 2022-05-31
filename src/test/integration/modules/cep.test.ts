import { IReturn } from '../../../interfaces';
import { addressOne, addressTwo } from '../../../utils';
import { searchCep } from '../../../modules/cepModules';

describe('test searchCep function', () => {
  it('should return IReturn(success) - message 1 for searchCep(18150000)', async () => {
    const IReturn: IReturn = {
      success: true,
      message: 'Bairro não encontrado.',
      data: addressOne,
      errors: [],
    };

    expect(await searchCep('18150000')).toStrictEqual(IReturn);
  });

  it('should return IReturn(failure) for searchCep(18150-000)', async () => {
    jest.setTimeout(10000);
    const IReturn: IReturn = {
      success: false,
      message: '',
      data: '',
      errors: ['CEP inválido!'],
    };

    expect(await searchCep('18150-000')).toStrictEqual(IReturn);
  });

  it('should return IReturn(sucess) - message 2 for searchCep(13172560)', async () => {
    jest.setTimeout(10000);
    const IReturn: IReturn = {
      success: true,
      message: 'Bairro encontrado.',
      data: addressTwo,
      errors: [],
    };

    expect(await searchCep('13172560')).toStrictEqual(IReturn);
  });
});
