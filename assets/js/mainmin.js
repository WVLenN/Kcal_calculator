const inputs=document.querySelectorAll("input"),manRadio=document.querySelector("#man"),womanRadio=document.querySelector("#woman"),heightInput=document.querySelector("#height"),weightInput=document.querySelector("#weight"),ageInput=document.querySelector("#age"),totalValue=document.querySelector("#value"),activityRadio=document.querySelectorAll("#activity");function calculate(){let e;e=!0===manRadio.checked?88.36:447.6;let t;t=!0===manRadio.checked?4.8*+heightInput.value:3.1*+heightInput.value;let a;a=!0===manRadio.checked?13.4*+weightInput.value:9.2*+weightInput.value;let u;u=!0===manRadio.checked?5.7*+ageInput.value:4.3*+ageInput.value;let o;for(radio of activityRadio)!0===radio.checked&&(o=+radio.value);var n=(e+a+t-u)*o;totalValue.textContent=Math.round(n)}inputs.forEach(e=>{e.addEventListener("input",()=>{calculate()})});