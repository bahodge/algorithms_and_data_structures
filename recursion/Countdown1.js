"use strict;";

const countDown = n => {
  if (n <= 0) {
    console.log("done");
    return 0;
  } else {
    console.log(n);
    return countDown(n - 1);
  }
};

countDown(countDown(100));
