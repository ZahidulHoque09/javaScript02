document.write("Making of vooting application");

/* let age = prompt("Enter you age:");
/* console.log(typeof age);

*  console.log(typeof +age); 

it shows its string type of data by default but we can make it number type of data by adding + before age */

let input = prompt("Enter you age");
let ageInput = +input;

if (ageInput > 130) {
  console.log("You are over aged and ready to die:");
} else if (ageInput > 0 && ageInput < 18) {
  /*   Here by addy and and i made boundary */

  console.log("You are not raedy to voot and to marry:");
} else if (ageInput > 18 && ageInput < 65) {
  console.log("You are ready to marry and ready for vooting:");
} else if (ageInput > 65 && ageInput < 130) {
  console.log("You are a retired person but you are eligible for vooting:");
} else if (ageInput < 0) {
  console.log("Invalid age limit or wrong input:");
}
