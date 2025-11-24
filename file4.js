function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error("Server A failed"));
      else resolve("Server A: Success");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error("Server B failed"));
      else resolve("Server B: Success");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(results => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch(err => console.error("Failure:", err.message));

Promise.race([serverA(), serverB()])
  .then(first => console.log("Fastest response:", first))
  .catch(err => console.error("Fastest failed:", err.message));
