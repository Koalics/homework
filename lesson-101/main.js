// function sumNumbers(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// };

// const result = sumNumbers(3, 10);
// console.log(result);

// const users = ['John', 'Ann', 'Alex', 'Max']; 

// const checkForCopyItem = (array, item) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       return `There is a copy of the ${item} in array`
//     }
//   }
//   return 'There is no such item in the array';
// };

// console.log(checkForCopyItem(users, 'Alex'));
// console.log(checkForCopyItem(users, 123));


// homework

// const greetingUser = (name) => {
//   return `Hello ${name})`;
// }

// console.log(greetingUser('ASD'));

// const numbers = [10, 7, 23, 15, 5]; 

// const compareNumbers = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 10) {
//       console.log(array[i]);
//     }
//   }
// };

// compareNumbers(numbers);

// const calculator = (firstNumber, secondNumber, operatop) => {
//   let result = 0;

//   switch (operatop) {
//     case '+':
//       result = firstNumber + secondNumber;
//       break;
//     case '-':
//       result = firstNumber - secondNumber;
//       break;
//     case '*':
//       result = firstNumber * secondNumber;
//       break;
//     case '/':
//       result = (secondNumber === 0) ? 'Division by zero' : firstNumber / secondNumber;
//       break;
//     default:
//       result = 'Operator no selected';
//   }

//   return result;
// }

// console.log(calculator(5, 5, '+'));
// console.log(calculator(5, 5, '-'));
// console.log(calculator(5, 5, '*'));
// console.log(calculator(5, 5, '/'));
// console.log(calculator(5, 0, '/'));
// console.log(calculator(5, 0, 'sadf'));