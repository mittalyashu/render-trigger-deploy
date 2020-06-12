const core = require('@actions/core');
const exec = require('@actions/exec');

const deployHook = core.getInput('deployHook', { required: true });

try {
  if (!deployHook) {
    core.warning('deployHook is not provided.');
  }

  exec.exec("curl - X POST - d '{}'", [deployHook]);
}
catch (err) {
  core.setFailed(`Action failed with error ${err}`);
}
