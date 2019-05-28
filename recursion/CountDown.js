"use strict";

const countDown = (n = n => {
  if (n <= 0) {
    console.log("all done!");
    return;
  }
  console.log(n);
  n--;
  countDown(n);
});

countDown(5);
