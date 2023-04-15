// 1 часть 
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countElement = document.getElementById("count");

let count = 0;

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

incrementButton.addEventListener("click", () => {
  count++;
  updateCount();
});

function updateCount() {
  countElement.textContent = count;

  if (count === 0) {
    countElement.classList.remove("green");
    countElement.classList.remove("red");
  } else if (count > 0) {
    countElement.classList.add("green");
    countElement.classList.remove("red");
  } else {
    countElement.classList.add("red");
    countElement.classList.remove("green");
  }
}

// 2

var block = document.getElementById("block");

block.addEventListener("mousemove", function(event) {
  var x = event.clientX - block.offsetLeft;
  var y = event.clientY - block.offsetTop;
  console.log("x: " + x + ", y: " + y);
});

// 3

const input = prompt("Введите цвет светофора (red or green)");

if (input === "red") {
  setLight("red", "STOP");
} else if (input === "green") {
  setLight("green", "GO");
} else {
  alert("Неизвестный цвет");
}

function setLight(color, text) {
  const lights = document.querySelectorAll(".light");
  lights.forEach(light => light.classList.remove("active"));
  const light = document.querySelector(`.${color}`);
  light.classList.add("active");
  const message = document.querySelector(".message");
  message.textContent = text;
}

const trafficLight = document.querySelector(".traffic-light");
const redLight = document.querySelector(".red");
const greenLight = document.querySelector(".green");

const changeLight = (color) => {
  if (color === "red") {
    redLight.classList.add("active");
    greenLight.classList.remove("active");
    alert("STOP");
  } else if (color === "green") {
    redLight.classList.remove("active");
    greenLight.classList.add("active");
    alert("GO");
  }
};

const input = prompt("Введите цвет: (red or green)");
changeLight(input);
