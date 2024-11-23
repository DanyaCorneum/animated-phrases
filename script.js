const buttonPressMe = document.getElementById("Press me");
const buttonMeToo = document.getElementById("Me too");
let buttonPressMeScore = 0;
let buttonMeTooScore = 0;

function changeColorPressMe() {
  if (buttonPressMeScore % 2 == 0) {
    buttonPressMe.style.backgroundColor = "rgb(88, 47, 126)";
    buttonPressMe.style.color = "rgb(218, 172, 89)";
  } else {
    buttonPressMe.style.backgroundColor = "rgb(169, 144, 203)";
    buttonPressMe.style.color = " wheat";
  }
  buttonPressMeScore++;
}

function changeColorMeToo() {
  if (buttonMeTooScore % 2 == 0) {
    buttonMeToo.style.backgroundColor = "rgb(88, 47, 126)";
    buttonMeToo.style.color = "rgb(218, 172, 89)";
  } else {
    buttonMeToo.style.backgroundColor = "rgb(169, 144, 203)";
    buttonMeToo.style.color = " wheat";
  }
  buttonMeTooScore++;
}

buttonPressMe.addEventListener("click", changeColorPressMe);
buttonMeToo.addEventListener("click", changeColorMeToo);
