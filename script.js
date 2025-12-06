function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value);
    // Adiciona operação e resultado no histórico
    let li = document.createElement('li');
    li.textContent = `${display.value} = ${result}`;
    historyList.appendChild(li);

    display.value = result;
  } catch (error) {
    display.value = 'Erro';
  }
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
const advPanel = document.querySelector(".advanced-panel");
const toggleAdv = document.getElementById("toggle-adv");

toggleAdv.addEventListener("click", () => {
  advPanel.classList.toggle("hidden");
});

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function delLast() {
  display.value = display.value.slice(0, -1);
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0) return 1;
  let r = 1;
  for (let i = 1; i <= n; i++) r *= i;
  return r;
}

function calculate() {
  try {
    let expression = display.value;

    if (expression.includes("!")) {
      let n = parseInt(expression.replace("!", ""));
      expression = factorial(n);
    }

    expression = expression.replace("%", "/100");

    let result = eval(expression);

    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;

  } catch (e) {
    display.value = "Erro";
  }
}
