'use strict';

import hiker from './hiker.js';

describe('Should Style: Answer', () => {
  it('is counted up to one step at a time', () => {
    let total = 0;
    for (let i = 0; i < 20000; i += 1) {
      total += i;
      console.log('debug: i is ' + i + ', total is ' + total);
    }
    const digits = null;
    digits.length.should.equal(hiker.answer());
  });
});
