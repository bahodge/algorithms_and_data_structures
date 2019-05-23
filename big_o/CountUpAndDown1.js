"use strict;";

// O(n)
const countUpAndDown = n => {
  console.log("going up");

  for (let i = 0; i <= n; i++) {
    console.log(i);
  }

  console.log("going down");
  for (let j = n; j >= 0; j--) {
    console.log(j);
  }
};

countUpAndDown(10);
