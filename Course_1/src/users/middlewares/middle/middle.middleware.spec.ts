import { MiddleMiddleware } from './middle.middleware';

describe('MiddleMiddleware', () => {
  it('should be defined', () => {
    expect(new MiddleMiddleware()).toBeDefined();
  });
});
