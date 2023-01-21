"use strict";

function calculateAnnualRate( monthlyRate){
    let annualrate = monthlyRate * 12;
    return annualrate;
}

function selectPlan(planName, monthlyRate){
    let annualrate = calculateAnnualRate(monthlyRate);

    let planNameElement = document.getElementById("planname");
    planNameElement.innerHTML = planName;

    let monthlyRateElement = document.getElementById("monthlyrate");
    monthlyRateElement.innerHTML = "$" + monthlyRate + "/mo";

    let annualRateElement = document.getElementById("annualrate");
    annualRateElement.innerHTML = "$" + annualrate + "/yr";

    let today = new Date();
    let nextYear = new Date();
    nextYear.setFullYear = today.getFullYear + 1;

    let gooduntilElement = document.getElementById("gooduntil");
    gooduntilElement.innerHTML = nextYear.toDateString();
}
