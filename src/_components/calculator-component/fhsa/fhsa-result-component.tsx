'use client';

// FHSA Calculator Example https://fhsacalculator.ca/fhsa-calculator/contribution-limit

const NEXT_YEAR = new Date().getFullYear() + 1;

export default function FhsaResultComponent(values: number[]) {
  const opened = NEXT_YEAR - values[0];
  const contributed = values[1];
  const contributionRoom = Math.min(opened * 8000 - contributed, 16000);

  const totalRemaining = 40000 - contributed;
  document.getElementById('contributionRoom').textContent =
    contributionRoom.toString();
  document.getElementById('totalRemaining').textContent =
    totalRemaining.toString();
  return [contributionRoom, totalRemaining];
}
