const heightCm = document.querySelector("#height-cm");
const heightFt = document.querySelector("#height-ft");

heightCm.addEventListener("input", function() {
  heightFt.value = this.value * 0.032808;
});
