'use strict';

import hiker from './hiker.js';

describe('Should Style: Answer', () => {
  it('to life the universe and everything', () => {
    hiker.answer().should.equal(42);
  });

  it('is not the number six by nine', () => {
    hiker.answer().should.not.equal(54);
  });

  it('is asked for twice with the same reply', () => {
    hiker.answer().should.equal(42);
  });
});
