const heightCm = document.querySelector("#height-cm");
const heightFt = document.querySelector("#height-ft");

// TODO{george}: Use existing code to get weight conversion working

// TODO{george}: Consider moving converter functions to a 'lib' (later!)
heightCm.addEventListener("input", function() {
  heightFt.value = this.value * 0.032808;
});
