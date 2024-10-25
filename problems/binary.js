/*
//binary to decimal
function convertToDecimal(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1 - i] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}

console.log(convertToDecimal("1010"));
/*
//diffrent system for binary to decimal(map method)
function Audrey(binary) {
  const value = [128, 64, 32, 16, 8, 4, 2, 1];
  let count = 0;
  for (let i = 0; i <= 8; i++) {
    if (binary[i] === "1") {
      count += value[i];
    }
  }
  return count;
} */

//decimal to binary
function convertToBinary(decimal) {
  let binary = "";
  for (let i = 0; i <= decimal.length; i++) {
    if (decimal[decimal.length] % 2 !== "0") {
      binary += "1";
    }
    return binary;
  }
}

console.log(convertToBinary("12"));
