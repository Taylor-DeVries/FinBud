"use client"


const NEXT_YEAR = 2026

export default function FhsaResultComponent(values: number[]) {
    let opened = NEXT_YEAR - values[0];
    let contributed = values[1];
    let contributionRoom = (opened * 8000) - contributed;
    let totalRemaining = 40000 - contributionRoom - contributed;
    document.getElementById("contributionRoom").textContent = contributionRoom.toString();
    document.getElementById("totalRemaining").textContent = totalRemaining.toString();
    return [contributionRoom, totalRemaining];


}