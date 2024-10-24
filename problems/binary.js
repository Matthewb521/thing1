//decimal = 1000
//disect the string 1000
//for every value from left to right, mulitply by 2^x
//print new value

function convertToDecimal(x) {
  let num = 0;
  for (let i = x.length; i !== 0; i--) {
    x[i] = 2 ** i;
  }
  return int(x);
}

console.log(convertToDecimal("1010"));
