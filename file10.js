function step(name) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      if (Math.random() < 0.2) reject(name + " failed");
      else resolve(name + " completed");
    }, delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log(await step("Order taken"));
    console.log(await step("Food prepared"));
    console.log(await step("Package ready"));
    console.log(await step("Out for delivery"));
    console.log("Delivery completed!");
  } catch {
    console.log("Pipeline failed!");
  }
}

runPipeline();
