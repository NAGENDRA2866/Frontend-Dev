function getBugs() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.25;
    setTimeout(() => {
      if (fail) reject(new Error("Failed to fetch bugs"));
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs.map((b, i) => ({ id: i + 1, bug: b }))))
  .catch(err => console.error("Error:", err.message));
