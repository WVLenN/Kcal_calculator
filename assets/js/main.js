const inputs = document.querySelectorAll('input');
const manRadio = document.querySelector('#man');
const womanRadio = document.querySelector('#woman');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const ageInput = document.querySelector('#age');
const totalValue = document.querySelector('#value');
const activityRadio = document.querySelectorAll('#activity');

function calculate() {
    let genderRadioValue;
    if(manRadio.checked === true) {
        genderRadioValue = 88.36;
    } else {
        genderRadioValue = 447.6;
    }
    let heightValue; 
    if(manRadio.checked === true) {
        heightValue = +heightInput.value * 4.8;
    } else {
        heightValue = +heightInput.value * 3.1;
    }
    let weightValue;
    if(manRadio.checked === true) {
        weightValue = +weightInput.value * 13.4;
    } else {
        weightValue = +weightInput.value * 9.2;
    }
    let ageValue;
    if(manRadio.checked === true) {
        ageValue = +ageInput.value * 5.7;
    } else {
        ageValue = +ageInput.value * 4.3;
    }
    let activityRadioValue;
    for (radio of activityRadio) {
        if (radio.checked === true) {
            activityRadioValue = +radio.value;
        }
    }
    let sum = (genderRadioValue + weightValue + heightValue - ageValue) * activityRadioValue;
    totalValue.textContent = Math.round(sum);
}

inputs.forEach((inputs) => {
    inputs.addEventListener('input', ()=> {
        calculate();
    })
})