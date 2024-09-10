"use client"


export default function tfsaMath(inputArray: string[]) {
    let inputs = [Number(inputArray[0]), Number(inputArray[1]), Number(inputArray[2]), Number(inputArray[3])];
    let yearlyRate = [7000,6500,6000,6000,6000,6000,5500,5500,5500,10000,5500,5500,5000,5000,5000,5000];
    let total = 0;
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
    }
    if (inputs[1] > 2006) {
        return 0;
    }
    let ageAbove18 = 2024 - (inputs[1] +18)
    let yearsAsResident = 2024 - (inputs[0])
    let counter = ageAbove18 < yearsAsResident ? ageAbove18 : yearsAsResident;
    console.log(counter);
    if((counter+1) > yearlyRate.length) {total = 95000;}
    
    else {
    while(counter >= 0 ) {
        total = total + yearlyRate[counter];
        counter--;
    }
    }
    console.log(total);
    
    


    

}