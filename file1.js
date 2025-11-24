function randomDelay(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simulateStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = randomDelay();
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed`));
      } else {
        console.log(`${stepName} done (${delay}ms)`);
        resolve();
      }
    }, delay);
  });
}

function boilWater() { return simulateStep("Boiling water"); }
function brewCoffee() { return simulateStep("Brewing coffee"); }
function pourCup() { return simulateStep("Pouring into cup"); }

console.log("Starting coffee process...");
boilWater()
  .then(brewCoffee)
  .then(pourCup)
  .then(() => console.log("Coffee ready for the team!"))
  .catch(err => console.error("Coffee process failed:", err.message));
