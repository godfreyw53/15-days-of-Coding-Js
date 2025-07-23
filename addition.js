function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Please enter valid numbers.';
  }
  return a + b;
}

function startAddition() {
 

  const input1 = prompt('Enter First Number:');
  const input2 = prompt('Enter Second Number:');

  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Please enter valid numbers.';
  } else {
    result = add(num1, num2);
  }

  document.getElementById('result').textContent = 'Result: ' + result;
}
