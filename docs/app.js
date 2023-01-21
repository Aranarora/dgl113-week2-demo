"use strict";

function calculateAnnualRate( monthlyRate){
    let annualrate = monthlyRate * 12;
    return annualrate;
}

function selectPlan(planName, monthlyRate){
    let annualrate = calculateAnnualRate(monthlyRate);

    let planVale = document.getElementById("planname");
    planVale.innerHTML = planName;

    let monthlyRateVale = document.getElementById("monthlyrate");
    monthlyRateVale.innerHTML = "$" + monthlyRate + "/mo";

    let annualRateValue = document.getElementById("annualrate");
    annualRateValue.innerHTML = "$" + annualrate + "/yr";

    let todayDate = new Date();
    let nextYear = new Date();
    nextYear.setFullYear = todayDate.getFullYear + 1;

    let gooduntilValue = document.getElementById("gooduntil");
    gooduntilValue.innerHTML = nextYear.toDateString();
}
