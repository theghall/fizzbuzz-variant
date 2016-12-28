// fizzbuzz-variant.js
//
// 2016-12-28 GH  Created
//
var i;
var sumEvenDivs = 0;
var isDivByThree = false;
var isDivByFive = false;

for (i=1; i <= 1000; i++) {
  isDivByThree = (i % 3) === 0;
  isDivByFive = (i % 5) === 0;

  if (isDivByThree || isDivByFive) {
    sumEvenDivs += i;
  }
}

console.log("Sum of numbers [1,1000] divisible by 3 and 5 is " + sumEvenDivs);
