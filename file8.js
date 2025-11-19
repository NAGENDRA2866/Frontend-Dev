(function nonStrictDemo(){
  function demo(a, a2) {
    total = 10;
    try {
      delete total;
      return { totalExists: typeof total !== "undefined", deletionAttempted: true };
    } catch (e) {
      return { error: e.message };
    }
  }
  const res = demo(5,10);
  console.log("Non-strict demo result:", res);
})();
(function strictDemo(){
  "use strict";
  function demoStrict(a, b) {
    try {
      undeclaredVar = 10;
      return { undeclaredVar };
    } catch (e) {
      return { caught: `${e.name}: ${e.message}` };
    }
  }
  const out = demoStrict(5,10);
  console.log("Strict demo result:", out);
})();
(function correctedES6(){
  "use strict";
  function demoCorrect(a,b){
    let total = 10;
    const obj = { total };
    delete obj.total;
    return { a, b, obj };
  }
  console.log("Correct ES6 result:", demoCorrect(5,10));
})();
