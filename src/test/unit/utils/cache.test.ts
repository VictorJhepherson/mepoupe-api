import { addressOne, timeExp } from '../../../utils';

class CacheMock {
  get(key) {
    if (key) return 0;

    return 1;
  }

  set(key, value, timeExp) {
    if (key && value && timeExp) return 0;

    return 1;
  }
}

const createSut = () => {
  const cacheMock = new CacheMock();

  return cacheMock;
};

describe('test getter Cache', () => {
  it('should return 0 for cacheMock.get(18150000)', () => {
    const cacheMock = createSut();

    expect(cacheMock.get(18150000)).toBe(0);
  });

  it('should return 1 for cacheMock.get(18150000)', () => {
    const cacheMock = createSut();

    expect(cacheMock.get(undefined)).toBe(1);
  });
});

describe('test setter Cache', () => {
  it('should return 0 for cacheMock.set(18150000)', () => {
    const cacheMock = createSut();

    expect(cacheMock.set(18150000, addressOne, timeExp)).toBe(0);
  });

  it('should return 1 for cacheMock.set(18150000)', () => {
    const cacheMock = createSut();

    expect(cacheMock.set(18150000, addressOne, undefined)).toBe(1);
  });
});
