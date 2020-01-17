export function getFormDataFromIDs(formEls) {
  return Array.from(formEls)
    .filter(element => element.id)
    .map(({ id, value }) => ({ [id]: value }))
    .reduce((accumulator, data) => ({ ...accumulator, ...data }));
}

// //Below function for rugby position form

export function findPosition(height, weight, speed) {
  if (
    height >= 192 &&
    height <= 197 &&
    weight >= 254 &&
    speed === "very slow"
  ) {
    return "You should be in the front row.";
  } else if (height >= 198 && weight > 245 && speed === "very slow") {
    return "you could be a lock";
  } else if (
    height >= 179 &&
    height <= 192 &&
    (weight => 242 && weight <= 253) &&
    speed === "slow"
  ) {
    return "you could be a loose forward";
  } else if (height <= 169 && weight <= 190 && speed === "medium") {
    return "You may be a scrum half";
  } else if (
    height >= 178 &&
    height <= 192 &&
    weight >= 190 &&
    weight <= 200 &&
    speed === "fast"
  ) {
    return "Lets put you in the backline depending on your skills you could be a fly half, center or even a full back.";
  } else if (
    height > 170 &&
    height < 188 &&
    weight < 210 &&
    speed === "very fast"
  ) {
    return "Because of your speed I think you are a winger";
  } else {
    return "Lets get you on a training pitch to really find out.";
  }
}

console.log(findPosition(177, 220, "slow"));
