'use strict';

import hiker from './hiker.js';

describe('Should Style: Answer', () => {
  it('to life the universe and everything', () => {
    hiker.answer().should.equal(42);
  });

  it('has as many digits as the answer has', () => {
    const digits = null;
    digits.length.should.equal(hiker.answer());
  });
});
