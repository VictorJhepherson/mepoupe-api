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
