const subscribe = document.getElementById("subBtn");
const upi = document.getElementById("upi");
const debit = document.getElementById("debitCard");
const p1 = document.getElementById("subBtnStatus");
const p2 = document.getElementById("paymentOptionChoosed");
const submit = document.getElementById("submit");

submit.onclick = function () {
  if (subscribe.checked) {
    p1.textContent = "Subscribed!!";
  }

  if (upi.checked) {
    p2.textContent = "Payment Option: UPI chosen";
  }

  if (debit.checked) {
    p2.textContent = "Payment Option: Debit Card chosen";
  }
};
