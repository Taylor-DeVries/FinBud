"use client"


export default function tfsaMath(inputArray: string[]) {
    if(inputArray[0] == "keyword") return 0;
    let inputs = [Math.floor(Number(inputArray[0])), Math.floor(Number(inputArray[1])), Math.floor(Number(inputArray[2])), Math.floor(Number(inputArray[3])), Math.floor(Number(inputArray[4]))];
    let yearlyRate = [7000,6500,6000,6000,6000,6000,5500,5500,5500,10000,5500,5500,5000,5000,5000,5000];
    let total = 0;
    if (inputs[1] > 2006) {
        return 0;
    }
    console.log(inputs);
    let ageAbove18 = 2024 - (inputs[1] +18)
    let yearsAsResident = 2024 - (inputs[0])
    let counter = ageAbove18 < yearsAsResident ? ageAbove18 : yearsAsResident;
    //console.log(counter);
    if((counter+1) > yearlyRate.length) {total = 95000;}
    
    else {
    while(counter >= 0 ) {
        total = total + yearlyRate[counter];
        counter--;
    }
    }
    console.log(inputs[4]);
    total = total - inputs[2] + inputs[3] - inputs[4];
    if (total < 0) total = 0;
    //console.log(total);
    return total;
    
    


    

}