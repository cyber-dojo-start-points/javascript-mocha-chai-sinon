'use strict';

import hiker from './hiker.js';

describe('Spy Style: Answer', () => {
  it('is asked for exactly once', () => {
    const spy = sinon.spy(hiker, 'answer');
    expect(spy).to.have.been.calledOnce;
  });
});
