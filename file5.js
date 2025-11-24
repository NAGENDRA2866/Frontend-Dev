function stage(name, cb) {
  setTimeout(() => {
    console.log(name);
    cb && cb();
  }, 1000);
}

function pipelineCallbackHell() {
  console.log("Pipeline start");
  stage("design", () => {
    stage("build", () => {
      stage("test", () => {
        stage("deploy", () => {
          stage("celebrate", () => {
            console.log("Pipeline complete");
          });
        });
      });
    });
  });
}

function stagePromise(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, 1000);
  });
}

async function pipelineAsync() {
  console.log("Pipeline start");
  await stagePromise("design");
  await stagePromise("build");
  await stagePromise("test");
  await stagePromise("deploy");
  await stagePromise("celebrate");
  console.log("Pipeline complete");
}

pipelineCallbackHell();
setTimeout(() => pipelineAsync(), 7000);
