 javascript-qunit-sinon session notes

## Changes made

- In `start_point/cyber-dojo.sh`,
  replaced `npm run lint` / `npm run test` with direct calls to the binaries:
  - `/etc/mocha/node_modules/.bin/eslint --config ${CYBER_DOJO_SANDBOX}/eslint.config.js /**/*.js`
  - `/etc/mocha/node_modules/.bin/nyc /etc/mocha/node_modules/.bin/mocha --require config.js --no-colors *Test.js`
  This reduced each run from ~6s to ~1.5s by eliminating `npm run` startup overhead.

## Repo relationships

Read https://github.com/cyber-dojo/cyber-dojo/blob/master/docs/how-to-contribute-to-start-points.md

Development loop:
In the languages repo:
1. Edit `docker/Dockerfile.base` 
2. Run `./pipe_build_up_test.sh` — builds image, prints new tag at the end
3. Update `image_name` in `start_point/manifest.json`
4. Edit start-point files in `start_point/`
5. Run `run_tests.sh` — verifies red/amber/green

**Important:** never run docker commands directly. Only test via `run_tests.sh`.
The runner containers have no internet access. The run_tests.sh script simulates three cyber-dojo [test] runs, once for red, once for amber, once for green, and prints a summary for each once that includes the duration. So you don't need to use the command time.

