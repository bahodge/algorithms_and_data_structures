"use strict;";

const countDown = n => {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
  console.log(0, "All Done");
};

countDown(1000);
