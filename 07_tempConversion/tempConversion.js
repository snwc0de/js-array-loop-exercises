const convertToCelsius = function(tempF) {
  let conv = (tempF - 32) * (5 / 9);
  let final = Number(conv.toFixed(1));

  return final;
};

const convertToFahrenheit = function(tempC) {
  let conv = (tempC * (9 / 5)) + 32;
  let final = Number(conv.toFixed(1));

  return final;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
