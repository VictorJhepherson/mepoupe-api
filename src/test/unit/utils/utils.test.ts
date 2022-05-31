import { isEmpty, calcAverage } from '../../../utils/';

describe('test isEmpty function', () => {
  it('should return false for isEmpty(5)', () => {
    expect(isEmpty(5)).toBe(false);
  });

  it('should return true for isEmpty(undefined)', () => {
    expect(isEmpty(undefined)).toBe(true);
  });
});

describe('test calcAverage function', () => {
  it('should return 10 for calcAverage(10, 10)', () => {
    expect(calcAverage(10, 10)).toBe(10);
  });
});
