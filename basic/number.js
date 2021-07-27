// 숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9; // 지수 표기법

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber); // true

// 지수 표기법
console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

// 16진법 (Hexadecimal) 0x
let hex1 = 0xff; // 255
let hex2 = 0xFF; // 255

// 8진법 (Octal) 0o
let octal = 0o377; // 255

// 2진법 (binary numberal system) 0b
let binary = 0b11111111; // 255

console.log(hex1); // 255
console.log(hex2); // 255
console.log(octal); // 255
console.log(binary); // 255

// 숫자형 메소드
let myNumber =  0.3591;

// 사실 숫자도 객체

// toFixed 자릿수 고정 0 ~ 100
console.log(myNumber.toFixed(3)); // 반올림해서 3자리로 고정
console.log(myNumber.toFixed(7)); // 나머진 0으로 채움 0.3591000
console.log(typeof myNumber.toFixed(7)); // 반환형이 문자열임 string
console.log(Number(myNumber.toFixed(3))); // 계산시 숫자형으로 형변환 필요
console.log(+myNumber.toFixed(3)); // 앞에 + 붙이면 Number함수와 똑같은 결과

let myNumber = 255;

// toString(2 ~ 36)
// 파라미터로 들어가는 숫자로 진법 변환
// 결과값 역시 문자열
console.log(myNumber.toString(2));
console.log(myNumber.toString(8));
console.log(myNumber.toString(16));

// 이렇게는 안됨 소수점으로 인식해버려서
// console.log(255.toString(2));
console.log(255..toString(2)); // 점 두 개를 사용해줘야함
console.log((255).toString(2)); // 또는 괄호를 쳐서 해결
