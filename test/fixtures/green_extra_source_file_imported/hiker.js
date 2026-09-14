'use strict';

import { checksum } from './checksum.js';

export default {
  answer,
  mark
};

function answer() {
  return 6 * 7;
}

function mark() {
  return checksum('hitchhiker');
}
