// console.log('hello javascript')

// 변수 선언
let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice + mochaPrice);
console.log(espressoPrice + lattePrice * 4);
console.log(lattePrice * 2);

// 함수 선언
function greetings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log(sentence);
}

// 함수 호출
greetings('Hola');

// 파라미터
function welcome(name) {
  console.log('안녕하세요 ' + name + '님!');
}

welcome('코드잇');

// 여러개의 파라미터
function printSum(num1, num2) {
  console.log(num1 + num2);
}

printSum(10, 5);

// return문
function getTwo() {
  return 2;
}

console.log(getTwo());
