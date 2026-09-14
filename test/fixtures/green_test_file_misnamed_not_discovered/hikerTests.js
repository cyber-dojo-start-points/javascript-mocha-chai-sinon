'use strict';

import hiker from './hiker.js';

describe('Misnamed answer size', () => {
  it('has three digits', () => {
    String(hiker.answer()).length.should.equal(3);
  });
});
