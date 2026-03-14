'use client';

// TFSA Calculation Sources
// Previous tax years https://www.empire.ca/how-use-canadian-tax-free-savings-account-tfsa/
// Example of a working calculator https://www.theglobeandmail.com/investing/personal-finance/tools/tfsa-limit/

export default function tfsaMath(inputArray: string[]) {
  if (inputArray[0] == 'keyword') return 0;

  const currentYear = new Date().getFullYear();

  const inputs = [
    Math.floor(Number(inputArray[0])),
    Math.floor(Number(inputArray[1])),
    Math.floor(Number(inputArray[2])),
    Math.floor(Number(inputArray[3])),
    Math.floor(Number(inputArray[4])),
  ];
  const yearlyRate = [
    7000, 7000, 7000, 6500, 6000, 6000, 6000, 6000, 5500, 5500, 5500, 10000,
    5500, 5500, 5000, 5000, 5000, 5000,
  ];

  if (inputs[1] > currentYear - 18) return 0;

  let total = 0;
  const ageAbove18 = currentYear - (inputs[1] + 18);
  const yearsAsResident = currentYear - inputs[0];

  let counter = ageAbove18 < yearsAsResident ? ageAbove18 : yearsAsResident;
  if (counter + 1 > yearlyRate.length) {
    counter = yearlyRate.length - 1;
  }
  while (counter >= 0) {
    total = total + yearlyRate[counter];
    counter--;
  }
  total = total - inputs[2] + inputs[3] - inputs[4];
  if (total < 0) total = 0;
  return total;
}
