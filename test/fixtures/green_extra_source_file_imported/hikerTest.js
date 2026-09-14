'use strict';

import hiker from './hiker.js';

describe('Should Style: Answer', () => {
  it('to life the universe and everything', () => {
    hiker.answer().should.equal(42);
  });

  it('marks the name of the book', () => {
    hiker.mark().should.equal(0);
  });
});
