/*
 *          _               _
 *       __| | __ _ _   _  / |
 *      / _` |/ _` | | | | | |
 *     | (_| | (_| | |_| | | |
 *      \__,_|\__,_|\__, | |_|
 *                  |___/
 */

const calculateFuelForFuel = (initialFuel) => {
  let subFuels = [];

  let currentFuel = initialFuel;
  while (currentFuel > 0) {
    currentFuel = Math.floor(currentFuel / 3) - 2;
    if (currentFuel > 0) subFuels.push(currentFuel);
  }
  return subFuels.reduce((a, b) => a + b, 0)
}

const calculateFuel = () => {
  let totalFuelPt1 = 0;
  let totalFuelPt2 = 0;

  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./1.txt')
  });

  lineReader.on('line', function(line) {

    // part 1
    totalFuelPt1 += Math.floor(Number(line) / 3) - 2;
    console.log('part 1:', totalFuelPt1);

    // part 2
    totalFuelPt2 += calculateFuelForFuel(Number(line));
    console.log('part 2:', totalFuelPt2);
  });
}

calculateFuel();