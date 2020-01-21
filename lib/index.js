export function getFormDataFromIDs(formEls) {
  return Array.from(formEls)
    .filter(element => element.id)
    .map(({ id, value }) => ({ [id]: value }))
    .reduce((accumulator, data) => ({ ...accumulator, ...data }));
}

export function findPosition(height, weight, speed) {
  if (
    height >= 192 &&
    height <= 197 &&
    weight >= 254 &&
    speed === "very slow"
  ) {
    return "From what you have entered it sounds like you should be in the front row, these are the power houses of the team. You need to be strong in the neck and shoulders as they are essential in the scrum. You drive the team forward in the rucks and the mauls but they also take the biggest beating in the upper body so you need to be tough.";
  } else if (height >= 198 && weight > 245 && speed === "very slow") {
    return "If you are very tall you are typically expected to be a lock they push the front row in the scrums and are the jumpers in the lineout.They are extremely powerful players and are essential to build a powerful team. Some of the biggest tacklers are locks so you can't be afraid to put in a big hit";
  } else if (
    height >= 179 &&
    height <= 192 &&
    (weight => 242 && weight <= 253) &&
    speed === "slow"
  ) {
    return "So this is where it can really depend on your skills, you could be loose forward these are flankers and number eights. Still extremely powerful forwards but they are a bit quicker and more agile and they look to put some real pressure on the opposition backline.";
  } else if (height <= 169 && weight <= 190 && speed === "medium") {
    return "So you may be the scrum half, typically the smaller player on the pitch but are essential in starting your attack getting the ball quickly to your backline.";
  } else if (
    height >= 178 &&
    height <= 192 &&
    weight >= 190 &&
    weight <= 200 &&
    speed === "fast"
  ) {
    return "Lets put you in the backline depending on your skills you could be a fly half, center or even a full back. The fly half is usually the first reciever from the scrum half and help getting the attack going. They usually do the goal kicking as well so a good boot is very important. The centers are a mix of defensive in the back line but also integral in breaking the line and getting the attack rolling. And finally the fullback the last line of defense and will return any kicks out of hand, if you don't close down a full back quickly expect a try soon after. So with the information we have it is possible you could fit into any of them.";
  } else if (
    height > 170 &&
    height < 188 &&
    weight < 210 &&
    speed === "very fast"
  ) {
    return "By far the quickest people on the pitch and on the edges of the pitch, a quick burst of speed and quick feet can make wingers the match winners. Don't close them down and they will score. So if you fancy yourself as a bit of a speedster then I think you should try out looking at wingers.";
  } else {
    return "So lets get you on the pitch to really get an idea, you could be a speedy front row or even a bulky center. To get a really good idea of what you can do you need to get on the rugby pitch. Have a look at this <a href ='http://www.stlhornetsrugby.com/'>St louis rugby club</a> and sign up for a practice session.";
  }
}
