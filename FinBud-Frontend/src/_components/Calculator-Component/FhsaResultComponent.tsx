"use client"


const NEXT_YEAR = 2026

export default function FhsaResultComponent(values: number[]) {
    const opened = NEXT_YEAR - values[0];
    const contributed = values[1];
    const contributionRoom = (opened * 8000) - contributed;
    const totalRemaining = 40000 - contributionRoom - contributed;
    document.getElementById("contributionRoom").textContent = contributionRoom.toString();
    document.getElementById("totalRemaining").textContent = totalRemaining.toString();
    return [contributionRoom, totalRemaining];


}