import { logger } from '../../../utils/logger';

describe('test logger function', () => {
  it('logging for logger.info("message")', () => {
    expect(logger.info('Teste do logger')).toBeNull;
  });
});
