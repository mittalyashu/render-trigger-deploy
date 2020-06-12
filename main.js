const core = require('@actions/core');
const exec = require('@actions/exec');

const run = async () => {
  try {
    core.debug('Inside try block');

    const deployHook = core.getInput('deployHook', { required: true });
    console.log("deployHook");
    console.log(deployHook);

    console.log("core.isDebug()");
    console.log(core.isDebug());

    // log error if deployHook not provided
    if (!deployHook) {
      core.warning('deployHook is not provided.');
    }

    exec.exec("curl - X POST - d '{}'", [deployHook]);
  }
  catch (err) {
    core.setFailed(`Action failed with error ${err}`);
  }
}

run()