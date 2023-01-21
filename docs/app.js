"use strict";

function selectPlan(planName, monthlyRate){

    let planVale = document.getElementById("planname");
    planVale.innerHTML = planName;
    let monthlyRateVale = document.getElementById("monthlyrate");
    monthlyRateVale.innerHTML = "$" + monthlyRate + "/mo";
    let annualRateValue = document.getElementById("annualrate");
    annualRateValue.innerHTML = "$" + monthlyRate * 12 + "/yr";
    let today = new Date();
    let nextYear = new Date();
    nextYear.setFullYear (today.getFullYear() + 1);
    let gooduntilValue = document.getElementById("gooduntil");
    gooduntilValue.innerHTML = nextYear.toDateString;
}
