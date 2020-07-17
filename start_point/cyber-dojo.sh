
export NODE_PATH=/usr/local/lib/node_modules

if [ -f .jshintrc ]; then
  jshint --config .jshintrc *.js
fi

if [ $? == 0 ]; then
  mocha \
    --require config.js \
    --no-colors \
    *Test.js
fi
