let startBtn = document.getElementById("startBtn");

let pedio_1_1 = document.getElementById("1*1");
let pedio_1_2 = document.getElementById("1*2");
let pedio_1_3 = document.getElementById("1*3");
let pedio_1_4 = document.getElementById("1*4");

let pedio_2_1 = document.getElementById("2*1");
let pedio_2_2 = document.getElementById("2*2");
let pedio_2_3 = document.getElementById("2*3");
let pedio_2_4 = document.getElementById("2*4");

let pedio_3_1 = document.getElementById("3*1");
let pedio_3_2 = document.getElementById("3*2");
let pedio_3_3 = document.getElementById("3*3");
let pedio_3_4 = document.getElementById("3*4");

let pedio_4_1 = document.getElementById("4*1");
let pedio_4_2 = document.getElementById("4*2");
let pedio_4_3 = document.getElementById("4*3");
let pedio_4_4 = document.getElementById("4*4");

let counter = 10;

let redCounter = 0;
let greenCounter = 0;

startBtn.onclick = async function () {
  randomGeneratorOfNumbers();

  pedio_1_1.onclick = () => changeColor(pedio_1_1);
  pedio_1_2.onclick = () => changeColor(pedio_1_2);
  pedio_1_3.onclick = () => changeColor(pedio_1_3);
  pedio_1_4.onclick = () => changeColor(pedio_1_4);

  pedio_2_1.onclick = () => changeColor(pedio_2_1);
  pedio_2_2.onclick = () => changeColor(pedio_2_2);
  pedio_2_3.onclick = () => changeColor(pedio_2_3);
  pedio_2_4.onclick = () => changeColor(pedio_2_4);

  pedio_3_1.onclick = () => changeColor(pedio_3_1);
  pedio_3_2.onclick = () => changeColor(pedio_3_2);
  pedio_3_3.onclick = () => changeColor(pedio_3_3);
  pedio_3_4.onclick = () => changeColor(pedio_3_4);

  pedio_4_1.onclick = () => changeColor(pedio_4_1);
  pedio_4_2.onclick = () => changeColor(pedio_4_2);
  pedio_4_3.onclick = () => changeColor(pedio_4_3);
  pedio_4_4.onclick = () => changeColor(pedio_4_4);

  let intervalId = setInterval(count, 1000);

  function count() {
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "grey";

    document.getElementById("counter").innerHTML = counter;
    counter--;

    if (counter === -1) {
      startBtn.disabled = false;
      startBtn.style.backgroundColor = "hsl(224, 100%, 48%)";
      clearInterval(intervalId);
      alert("Reds:" + redCounter);
      alert("Greens:" + greenCounter);

      if (greenCounter > redCounter) {
        alert("WINNER WINNER CHICKEN DINNER");
      } else {
        alert("Better luck next time");
      }
      location.reload();
    }
  }
};

const changeColor = function (pedio) {
  if (Number(pedio.innerText) > 5) {
    pedio.style.backgroundColor = "green";
    greenCounter++;
  } else {
    pedio.style.backgroundColor = "red";
    redCounter++;
  }
};

function randomGeneratorOfNumbers() {
  pedio_1_1.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_1_2.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_1_3.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_1_4.innerText = Math.floor(Math.random() * 9 + 1);

  pedio_2_1.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_2_2.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_2_3.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_2_4.innerText = Math.floor(Math.random() * 9 + 1);

  pedio_3_1.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_3_2.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_3_3.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_3_4.innerText = Math.floor(Math.random() * 9 + 1);

  pedio_4_1.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_4_2.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_4_3.innerText = Math.floor(Math.random() * 9 + 1);
  pedio_4_4.innerText = Math.floor(Math.random() * 9 + 1);
}
