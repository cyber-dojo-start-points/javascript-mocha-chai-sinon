'use strict';

import hiker from './hiker.js';

describe('Should Style: Answer', () => {
  it('is shouted back in capitals', () => {
    hiker.shout('forty two').should.equal('FORTY TWO');
  });
});
