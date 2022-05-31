import { isCep } from '../../../utils';

describe('test isCep function', () => {
  it('should return true for isCep(18150000)', () => {
    expect(isCep('18150000')).toBe(true);
  });

  it('should return false for isCep(18150000)', () => {
    expect(isCep('18150-000')).toBe(false);
  });
});
