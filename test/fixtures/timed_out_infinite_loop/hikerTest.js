'use strict';

import hiker from './hiker.js';

describe('Should Style: Answer', () => {
  it('to life the universe and everything', () => {
    let total = 0;
    while (hiker.answer() !== 0) {
      total += 1;
    }
    total.should.equal(42);
  });
});
