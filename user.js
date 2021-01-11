const dialogEl = document.getElementById("dialog");
const answerEl = document.getElementById("answer");
const textEl = document.getElementById("text");

function getRandomNumber () {
  return Math.ceil(Math.random() * 10);
}

dialogEl.innerText = "Сыграем!";
let step = 0;
let attempts = 0;
let n = getRandomNumber();
answerEl.addEventListener("click", function () {
  const answer = textEl.value; 
  switch (step) {
    case 0: {
      if (answer.toUpperCase() === 'ДА') {
        step++;
        dialogEl.innerText = "Угадай число от 1 до 10.";
      }
      break;
    }
    case 1: {
      attempts++;
      if (+answer === n) {
        dialogEl.innerText = "Правильно! Тебе понадобилось " + attempts + " попыток." + "Сыграть еще раз?";
        step++;
      }
      else if (+answer > n) {
        dialogEl.innerText = "Cлишком!";
      }
      else if (+answer < n) {
        dialogEl.innerText = "Мало!";
      }
      else {
        dialogEl.innerText = "что-то не то!";
      }
      break;
    }
    case 2: {
      if (answer.toUpperCase() === 'ДА') {
        step--;
        attempts = 0;
        dialogEl.innerText = "Угадай число от 1 до 10.";
        n = getRandomNumber();
      } 
    }
  }
    

  textEl.value = "";
});




