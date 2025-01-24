"use client"


export default function tfsaMath(inputArray: string[]) {
    if(inputArray[0] == "keyword") return 0;
    let inputs = [Math.floor(Number(inputArray[0])), Math.floor(Number(inputArray[1])), Math.floor(Number(inputArray[2])), Math.floor(Number(inputArray[3])), Math.floor(Number(inputArray[4]))];
    let yearlyRate = [7000,7000,6500,6000,6000,6000,6000,5500,5500,5500,10000,5500,5500,5000,5000,5000,5000];
    let total = 0;
    if (inputs[1] > 2007) {
        return 0;
    }
    let ageAbove18 = 2025 - (inputs[1] +18)
    let yearsAsResident = 2025 - (inputs[0])
    let counter = ageAbove18 < yearsAsResident ? ageAbove18 : yearsAsResident;
    if((counter+1) > yearlyRate.length) {total = 102000;}
    
    else {
    while(counter >= 0 ) {
        total = total + yearlyRate[counter];
        counter--;
    }
    }
    total = total - inputs[2] + inputs[3] - inputs[4];
    if (total < 0) total = 0;
    return total;
    
    


    

}