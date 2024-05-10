let sumOfTwoNumbers = () => {

let firstNum = document.getElementById('firstInput').value;
let secondNum = document.getElementById('secondInput').value;

console.log(firstNum);
console.log(secondNum);

let total = Number(firstNum) + Number(secondNum);

document.getElementById('sum').innerHTML = total;

} 