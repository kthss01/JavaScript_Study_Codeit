// typeof 연산자
console.log(typeof 101); // number
console.log(typeof 'Codeit'); // string
console.log(typeof true); // boolean
console.log(typeof 1); // number
console.log(typeof 1.0); // number 소수, 정수 구분 x

function sayHello() {
  console.log('Hello');
}

console.log(typeof sayHello); // function

console.log(typeof 'Hello' + 'Codeit'); // stringCodeit
console.log(typeof 8 - 3); // NaN
// not a number
// typeof 연산자는 기본적으로 사칙연산자들보다 우선순위가 높아서 그런거

// 형 변환 (Type Conversion)
// String, Number, boolean
console.log(Number('10') + Number('5')); // 15
console.log(String(10) + String(5)); // 105

let x = true;
console.log(Number(x)); // 1 false : 0
let y = 123;
console.log(Boolean(y)); // true 값은 true로 바뀜
y = 'str';
console.log(Boolean(y)); // true
y = '';
console.log(Boolean(y)); // false
y = 0;
console.log(Boolean(y)); // false
y = NaN;
console.log(Boolean(y)); // false

// 자동 형변
console.log('4' - true); // 3

// 산술 연산 (+, -, *, /, %, **)
console.log(4 + '2'); // 42
console.log(4 - true); // 3
console.log(4 * false); // 0
console.log(4 / '2'); // 2/
console.log('4' ** true); // 4
console.log(4 % 'two'); // NaN

// 관계 비교 연산 (<, <=, >, >=)
console.log(2 <'3'); // true
console.log(2 > true); // true
console.log('2' <= false); // false
console.log('two' >= 1); // false 비교가 불가능한 경우에도 false가 나옴

// 같은 비교 연산 (===, !==, ==, 1=)
console.log(1 === '1'); // 일치, 불일치(!==) false
console.log(1 === true); // false
console.log(1 == '1'); // 동등, 부등(!=) true
console.log(1 == true); // true
