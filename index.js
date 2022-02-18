//select all div .pg:
let numberButtons = document.querySelectorAll(".pg").length;

//on click of .pg X start function with event as paramet:

for (let i = 0; i < numberButtons; i++) {
  document.querySelectorAll(".pg")[i].addEventListener("click", function (e) {
    let clickedButton = e.target.className; //select element that triggered the event
    let audio = new Audio("sounds/" + clickedButton + ".mp3");
    audio.play(); //start event
  });
}

document.addEventListener("keydown", function (e) {
  let keyPressed = e.key;
  if (
    keyPressed == "a" ||
    keyPressed == "s" ||
    keyPressed == "d" ||
    keyPressed == "f" ||
    keyPressed == "g" ||
    keyPressed == "h" ||
    keyPressed == "j" ||
    keyPressed == "k" ||
    keyPressed == "l"
  ) {
    let audio = new Audio("sounds/pg " + keyPressed + ".mp3");
    audio.play();
  } else {
    alert(`You can only press one of this keys:
    -A    -G
    -S    -H
    -D    -J
    -F    -L`);
  }
});

