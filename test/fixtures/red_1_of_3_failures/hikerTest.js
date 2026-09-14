'use strict';

import hiker from './hiker.js';

describe('Should Style: Answer', () => {
  it('to life the universe and everything', () => {
    hiker.answer().should.equal(42);
  });

  it('is written with two digits', () => {
    String(hiker.answer()).length.should.equal(2);
  });

  it('is a whole number', () => {
    Number.isInteger(hiker.answer()).should.equal(true);
  });
});
