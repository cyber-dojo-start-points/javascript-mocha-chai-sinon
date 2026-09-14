'use strict';

import hiker from './hiker.js';

describe('Should Style: Answer', () => {
  it('to life the universe and everything', () => {
    hiker.answer().should.equal(42);
  });

  it('is written with two digits', () => {
    String(hiker.answer()).length.should.equal(2);
  });

  it('does not match the question', () => {
    hiker.question().should.not.equal(String(hiker.answer()));
  });
});
