import { FocusDirective } from './focus.directive';

describe('FocusDirective', () => {
  it('should create an instance', () => {
    const directive = new FocusDirective(this.elements);
    expect(directive).toBeTruthy();
  });
});
