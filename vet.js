
function process(){
const weight = document.getElementById('weight').value
const dose_rate = document.getElementById('dose_rate').value
const mlperhour = document.getElementById('mlperhour').value
const bag_size = document.getElementById('bag_size').value
// const drugconcentration = document.getElementById('drugconcentration').value
//const draw_off = document.getElementById('draw_off').value

/* 1. - take the 'weight' of the animal and multiply by 'dose_rate' (mg/kg/day) 
= weightTimesDoseRate */

const weightTimesDoseRate = weight * dose_rate

console.log (weightTimesDoseRate);

 // 2. - divide 'weightTimesDoseRate' by the number of hours in a day (24)
 
 const wTDRPerHour = weightTimesDoseRate / 24

 console.log (wTDRPerHour)

 // 3.  The result of 'wTDRPerHour' is divided by Fluid 'mlperhour' 

 const fluidRatePerHr = wTDRPerHour / mlperhour

 console.log (fluidRatePerHr)

 // 4. fluidRatePerHr (mg/ml) is multiplied by the selected 'bag_size'

 const addOn = fluidRatePerHr * bag_size

 console.log (addOn)

 // 5. Divide the 'addon' by the 'drugDose' (mg)

 const addOnDrugDose = addOn / 5

 /* 6. Add 'addOnDrugDose' ml of drug to chosen 'bag_size' and run at 'dose_rate' 
 mg/kg/day */

//  document.write(`<br><h3>Add ${addOnDrugDose.toFixed (3)}ml to
//  ${bag_size} ml bag and run at ${mlperhour}ml/h to provide ${dose_rate}mg/kg/day</h3>`)
//  document.close();

 document.getElementById('result').innerHTML = (`<h3>Add ${addOnDrugDose.toFixed (3)} ml to
 ${bag_size} ml bag and run at ${mlperhour} ml/h to provide ${dose_rate} mg/kg/day</h3>`)

 

}