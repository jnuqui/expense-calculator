let housingPercent = 30;
let foodPercent = 15;
let insurancePercent = 10;
let utilitiesPercent = 10;
let miscPercent = 10;
let savingsPercent = 5;


window.onload = function populatePercentages() {

document.getElementById("housingPercent").value = housingPercent;
document.getElementById("foodPercent").value = foodPercent;
document.getElementById("insurancePercent").value = insurancePercent;
document.getElementById("utilitiesPercent").value = insurancePercent;
document.getElementById("miscPercent").value = miscPercent;
document.getElementById("savingsPercent").value = savingsPercent;

}

function calculate (){
    let paycheck = document.getElementById("paycheck").value;

    let housingPercentValue = document.getElementById("housingPercent").value;
    let foodPercentValue = document.getElementById("foodPercent").value;
    let insurancePercentValue = document.getElementById("insurancePercent").value;
    let utilitiesPercentValue = document.getElementById("utilitiesPercent").value;
    let miscPercentValue = document.getElementById("miscPercent").value;
    let savingsPercentValue = document.getElementById("savingsPercent").value;


    let housing = (paycheck * (housingPercentValue/100)).toFixed(2);
    let food = (paycheck * (foodPercentValue/100)).toFixed(2);
    let insurance = (paycheck * (insurancePercentValue/100)).toFixed(2);
    let utilities = (paycheck * (utilitiesPercentValue/100)).toFixed(2);
    let misc = (paycheck * (miscPercentValue/100)).toFixed(2);
    let savings = (paycheck * (savingsPercentValue/100)).toFixed(2);


    document.getElementById("housing").innerText = "$" + housing;
    food = document.getElementById("food").innerText = "$" + food;
    insurance = document.getElementById("insurance").innerText = "$" + insurance;
    utilities = document.getElementById("utilities").innerText = "$" + utilities;
    misc = document.getElementById("misc").innerText = "$" + misc;
    savings = document.getElementById("savings").innerText = "$" + savings;  
}