'use strict';

import hiker from './hiker.js';

describe('Mock Style: Answer', () => {
  it('is asked for exactly once', () => {
    const mock = sinon.mock(hiker);
    mock.expects('answer').once();
    mock.verify();
  });
});
