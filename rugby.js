const heightCm = document.querySelector("#height-cm");
const heightFt = document.querySelector("#height-ft");

heightCm.addEventListener("input", function() {
  heightFt.value = this.value * 0.032808;
});

const weightLlbs = document.querySelector("#weight-Llbs");
const weightKg = document.querySelector("#weight-Kg");

weightLlbs.addEventListener("input", function() {
  weightKg.value = this.value / 2.205;
});
