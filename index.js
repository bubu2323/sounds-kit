//select all div .pg:
let numberButtons = document.querySelectorAll(".pg").length;
/* Declare an empty array, needs to be outsite of the foreach */
let filterKbd = [];
const pg = document.querySelectorAll(".pg");
/* foreach element with class pg, split the string into array using space as divider (return array and pushing into arr will make a nested array, to prevent this use [1]), filter the result removing the class pg from array and push everything into arr */
pg.forEach((e) => {
  filterKbd.push(e.className.split(" ")[1]);
  filterKbd.filter((v) => v != "pg");
});

//on click of .pg X start function with event as paramet:

for (let i = 0; i < numberButtons; i++) {
  document.querySelectorAll(".pg")[i].addEventListener("click", function (e) {
    let clickedButton = e.target.className; //select element that triggered the event
    let audio = new Audio("sounds/" + clickedButton + ".mp3");
    audio.play(); //start event
  });
}

document.addEventListener("keydown", function (e) {
  if (!filterKbd.includes(e.key)) {
    return;
  }

  let keyPressed = e.key;

  let audio = new Audio("sounds/pg " + keyPressed + ".mp3");
  audio.play();
});
