//this shows how functions works
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Please Enter a Valid Number';
  }
  return a * b;
}

function startMultiplication() {
  const number1 = prompt('Enter the first number:');
  const number2 = prompt('Enter the second number:');

  const n1 = parseFloat(number1);
  const n2 = parseFloat(number2);

  let result;

  if (isNaN(n1) || isNaN(n2)) {
    result = 'Please Enter Valid numbers';
  } else {
    result = multiply(n1, n2);
  }

  document.getElementById('result').textContent = 'Result: ' + result;
}
