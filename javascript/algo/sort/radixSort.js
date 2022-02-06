function getDigit(number, place) {
  const strNumber = number.toString();
  const position = strNumber.length - 1 - place;
  return +strNumber[position] || 0;
}

function getDigitFormula(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function digitCount(number) {
  const strNumber = number.toString();
  return strNumber.replace("-", "").length;
}

function digitCountFormula(number) {
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

