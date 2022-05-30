import swaggerAutogen from 'swagger-autogen';
import swaggerFile from '../../src/documentation/swagger.json';
import averageRoutes from '../routes/averageRoutes';
import cepRoutes from '../routes/cepRoutes';
import infoRoutes from '../routes/infoRoutes';

const output = swaggerFile;
const endpoints = [averageRoutes, cepRoutes, infoRoutes];

swaggerAutogen(output, endpoints);
