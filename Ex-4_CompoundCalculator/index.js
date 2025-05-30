const principalInputBox = document.getElementById("principal");
const roiInputBox = document.getElementById("roi");
const yearInputBox = document.getElementById("years");
const annuallyRadioBtn = document.getElementById("annually");
const halfYearlyRadioBtn = document.getElementById("halfYearly");
const quaterlyRadioBtn = document.getElementById("quaterly");
const calculateBtn = document.getElementById("calculateBtn");
const amountTextBox = document.getElementById("amount");
const interestTextBox = document.getElementById("interest");

calculateBtn.onclick = () => {
  let principalAmount = Number(principalInputBox.value);
  let roi = Number(roiInputBox.value);
  let years = Number(yearInputBox.value);
  let cpy; //compounding per year
  let validInputs = true;
  if (annuallyRadioBtn.checked) {
    cpy = 1;
  } else if (halfYearlyRadioBtn.checked) {
    cpy = 2;
  } else if (quaterlyRadioBtn.checked) {
    cpy = 4;
  } else {
    window.alert("Please choose type of compounding per year");
  }

  //check for negative values
  if (principalAmount < 0) {
    window.alert("Principal Needs to be positive");
    validInputs = false;
  }
  if (roi < 0) {
    window.alert("ROI Needs to be positive");
    validInputs = false;
  }
  if (years < 0) {
    window.alert("Years Needs to be positive");
    validInputs = false;
  }

  if (validInputs) {
    //all inputs are valid

    let amount = principalAmount * Math.pow(1 + roi / (100 * cpy), cpy * years);
    let interest = amount - principalAmount;

    amount = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);

    interest = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(interest);

    amountTextBox.textContent = amount;
    interestTextBox.textContent = interest;
  }
};
