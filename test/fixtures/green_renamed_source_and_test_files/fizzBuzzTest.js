'use strict';

import fizzBuzz from './fizzBuzz.js';

describe('Should Style: FizzBuzz', () => {
  it('says the number when it divides by neither three nor five', () => {
    fizzBuzz.say(1).should.equal('1');
  });

  it('says Fizz when the number divides by three', () => {
    fizzBuzz.say(6).should.equal('Fizz');
  });

  it('says Buzz when the number divides by five', () => {
    fizzBuzz.say(10).should.equal('Buzz');
  });

  it('says FizzBuzz when the number divides by three and five', () => {
    fizzBuzz.say(30).should.equal('FizzBuzz');
  });
});
