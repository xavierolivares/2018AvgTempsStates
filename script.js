const data = require("./1990Temps/MI");

const avg = thing => {
  let sum = 0;
  for (let i = 0; i < thing.length; i++) {
    sum += thing[i].TAVG;
  }
  let average = sum / thing.length;
  return average.toFixed(2);
};

console.log("average temp of NJ in 2018:", avg(data));
