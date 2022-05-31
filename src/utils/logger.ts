import dotenv from 'dotenv';
dotenv.config();

import log from 'pino';
import { format } from 'date-fns';

export const logger = log({
  level: process.env.LOG_LEVEL,
  timestamp: () => `,"time":"${format(new Date(), 'dd/mm/yyyy')}"`,
  prettyPrint: {
    levelFirst: true,
  },
});
