import dotenv from 'dotenv';
dotenv.config();

export const isEmpty = (data) => {
  if (data === undefined || data === '') return true;

  return false;
};

export const Trim = (str: string) => {
  return str.replace(/^\s+|\s+$/g, '');
};

export const isCep = (cep: string) => {
  const regex = /[\d]{8}/g;

  const newCep = Trim(cep);
  if (newCep.length > 0) {
    if (newCep.match(regex)) return true;

    return false;
  }

  return false;
};

export const timeExp = 60 * 5;
export const addressOne = {
  cep: '18150-000',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: 'Ibiúna',
  uf: 'SP',
  ibge: '3519709',
  gia: '3451',
  ddd: '15',
  siafi: '6495',
};

export const addressTwo = {
  cep: '13172-560',
  logradouro: 'Rua Emília Giraldi Quental',
  complemento: 'até 500/501',
  bairro: 'Parque João de Vasconcelos',
  localidade: 'Sumaré',
  uf: 'SP',
  ibge: '3552403',
  gia: '6713',
  ddd: '19',
  siafi: '7149',
};

export const calcAverage = (numberOne, numberTwo) => {
  const calc = (Number(numberOne) + Number(numberTwo)) / 2;

  const aux = Math.pow(10, 2);

  const result = Math.round(calc * aux) / aux;

  return result;
};

export const infoAPI = {
  app: {
    name: 'mepoupe-api',
    version: process.env.VERSION,
    description: 'mepoupe-api in node with expressjs and typescript',
    host: `localhost:${process.env.PORT}`,
    port: process.env.PORT,
    ready: 'true',
  },
};
