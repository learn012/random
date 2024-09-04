function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    let current = document.getElementById('display').value;
    if (current !== '' && !isNaN(current[current.length - 1])) {
        document.getElementById('display').value += operator;
    }
}

function appendDot() {
    let current = document.getElementById('display').value;
    if (current === '' || isNaN(current[current.length - 1])) {
        document.getElementById('display').value += '0.';
    } else if (!current.includes('.')) {
        document.getElementById('display').value += '.';
    }
}

function calculateResult() {
    let current = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(current);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
