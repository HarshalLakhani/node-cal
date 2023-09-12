// let data = process.argv;

// console.log(data);

const A = process.argv[2];
const B = process.argv[3];
const operator = process.argv[4];

let result;

switch (operator) {
  case '+':
    result = A + B;
    break;
  case '-':
    result = A - B;
    break;
  case '*':
    result = A * B;
    break;
  case '/':
    result = A / B;
    break;
  default:
    console.log('Invalid operator');
    process.exit(1);
}

console.log(`Result: ${result}`);