import { AnothermidMiddleware } from './anothermid.middleware';

describe('AnothermidMiddleware', () => {
  it('should be defined', () => {
    expect(new AnothermidMiddleware()).toBeDefined();
  });
});
