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

      let audio = new Audio("sounds/pg " + keyPressed + ".mp3");
      audio.play();

});
