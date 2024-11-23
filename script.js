const buttonPressMe = document.getElementById("Press me");
const buttonMeToo = document.getElementById("Me too");
const score = document.getElementsByClassName("score")[0];
let num = 0;

let PressMeFlag = true;
let MeTooScoreFlag = true;

function changeColorPressMe() {
  if (PressMeFlag) {
    buttonPressMe.style.backgroundColor = "rgb(88, 47, 126)";
    buttonPressMe.style.color = "rgb(218, 172, 89)";
    PressMeFlag = false;
  } else {
    buttonPressMe.style.backgroundColor = "rgb(169, 144, 203)";
    buttonPressMe.style.color = " wheat";
    PressMeFlag = true;
  }
  num++;
  score.textContent = num;
}

function changeColorMeToo() {
  if (MeTooScoreFlag) {
    buttonMeToo.style.backgroundColor = "rgb(88, 47, 126)";
    buttonMeToo.style.color = "rgb(218, 172, 89)";
    MeTooScoreFlag = false;
  } else {
    buttonMeToo.style.backgroundColor = "rgb(169, 144, 203)";
    buttonMeToo.style.color = " wheat";
    MeTooScoreFlag = true;
  }
  num++;
  score.textContent = num;
}

buttonPressMe.addEventListener("click", changeColorPressMe);
buttonMeToo.addEventListener("click", changeColorMeToo);
