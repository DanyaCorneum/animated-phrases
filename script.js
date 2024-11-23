const buttonPressMe = document.getElementById("Press me");
const buttonMeToo = document.getElementById("Me too");
const score = document.getElementsByClassName("score")[0];

let num = 0;
let PressMeFlag = true;
let MeTooFlag = true;

function clickButton(button, flag) {
  if (flag) {
    button.style.backgroundColor = "rgb(88, 47, 126)";
    button.style.color = "rgb(218, 172, 89)";
  } else {
    button.style.backgroundColor = "rgb(169, 144, 203)";
    button.style.color = "wheat";
  }
  num++;
  score.textContent = num;
}

function clickPressMe() {
  clickButton(buttonPressMe, PressMeFlag);
  PressMeFlag = !PressMeFlag;
}

function clickMeToo() {
  clickButton(buttonMeToo, MeTooFlag);
  MeTooFlag = !MeTooFlag;
}

buttonPressMe.addEventListener("click", clickPressMe);
buttonMeToo.addEventListener("click", clickMeToo);
