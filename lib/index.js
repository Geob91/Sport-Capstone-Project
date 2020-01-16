//Below functions for weight and height converter

// export { default as positionCalc } from "./position";

/**
 *
 * @param {NodeList} formEls
 * @returns {Object} 'id' as 🔑s and 'value' as values
 */
export function getFormDataFromIDs(formEls) {
  return (
    // Convert NODELIST into ARRAY for access to 'superpowers.'
    Array.from(formEls)
      // Remove any elements that don't have an 'id' attribute.
      .filter(element => element.id)
      // Map over each element and DESTRUCTURE 'id' and 'value.'
      .map(({ id, value }) =>
        // Create an OBJECT with 'id' as 🔑 and 'value' as the value...
        ({
          [id]: value
        })
      )
      // 'Merge' our ARRAY of OBJECTS into 1 OBJECT
      .reduce((accumulator, data) => ({ ...accumulator, ...data }))
  );
}

// const heightCm = document.querySelector("#height-cm");
// const heightFt = document.querySelector("#height-ft");

// heightCm.addEventListener("input", function() {
//   heightFt.value = this.value * 0.032808;
// });

// const weightLlbs = document.querySelector("#weight-Llbs");
// const weightKg = document.querySelector("#weight-Kg");

// weightLlbs.addEventListener("input", function() {
//   weightKg.value = this.value / 2.205;
// });

// //Below function for rugby position form
// document.getElementById("theForm").addEventListener("submit", submitForm);

// function sendForm(event) {
//   event.preventDefault();

//   const name = getInputVal("full-name");
//   const age = getInputVal("age");
//   const heightCm = getInputVal("height-cm");
//   const heightFt = getInputVal("height-Ft");
//   const weightKg = getInputVal("weight-Kg");
//   const speed = getInputVal("speed");
// }

// function getInputVal(id) {
//   return document.getElementById(id).value;
// }

// //Below rugby postion conditionals giving you a position

// function findPosition(height, weight, speed) {
//   if (
//     (height => 192 && height <= 197) &&
//     weight >= 254 &&
//     speed === "very slow"
//   ) {
//     return "You should be in the front row.";
//   } else if (height >= 198 && weight > 245 && speed === "very slow") {
//     return "you could be a lock";
//   } else if (
//     height >= 179 &&
//     height <= 192 &&
//     (weight => 242 && weight <= 253) &&
//     speed === "slow"
//   ) {
//     return "you could be a loose forward";
//   } else if (height <= 169 && weight <= 190 && speed === "medium") {
//     return "You may be a scrum half";
//   } else if (
//     height >= 178 &&
//     height <= 192 &&
//     weight >= 190 &&
//     weight <= 200 &&
//     speed === "fast"
//   ) {
//     return "Lets put you in the backline depending on your skills you could be a fly half, center or even a full back.";
//   } else if (
//     height > 170 &&
//     height < 188 &&
//     weight < 210 &&
//     speed === "very fast"
//   ) {
//     return "Because of your speed I think you are a winger";
//   } else {
//     return "Lets get you on a training pitch to really find out.";
//   }
// }
// console.log(findPosition(199, 265, "slow"));

// // Below functions for contact form

// document.getElementById("contactForm").addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();

//   const fname = getInputVal("fname");
//   const lname = getInputVal("lname");
//   const phone = getInputVal("Phone");
//   const email = getInputVal("email");
//   const message = getInputVal("message");
// }
// function getInputVal(id) {
//   return document.getElementById(id).value;
// }
