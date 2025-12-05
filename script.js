let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

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
