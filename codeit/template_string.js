// 탬플릿 문자열 (template strings)
// template: 일정한 틀, 형식
let year = 2021;
let month = 5;
let day = 16;

console.log(`${year}.${month}.${day}`);

let myNumber = 3;

function getTwice(x) {
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);

// null과 undefined
let codeit;
console.log(codeit); // undefined
codeit = null; // 값이 없는 상태를 표현할 거면 null 사용
console.log(codeit); // null

console.log(null == undefined); // true
consoel.log(null === undefined); // false

// for ... in
// for ... in 반복문은 객체 안에 있는 프로퍼티들을 가지고
// 반복적인 동작을 수행할 때 사용
// 객체의 프로퍼티 네임을 가져오는 반복문이기 때문에 일반적인 반복문이랑 좀 다름

// for (변수 in 객체) {
//   동작부
// }

for (let key in codeit) {
  console.log(key);
  console.log(codeit[key]); // 이렇게도 접근 가능
}

// for in 반복문이 실행될 때 따로 정해진 순서 없이 객체에 추가한 순서를 따라서
// 반복문이 수행된 걸 볼 수 있는데

let myObject = {
  '2' : '알고리즘의 정석',
  '3' : '컴퓨터 개론',
  '1' : '자바스크립트 프로그래밍 기초',
};

for (let key in myObject) {
  console.log(myObject[key]);
}
// 이렇게 돌리면 순서가 추가한 순서대로 나오지 않음

// 숫자형(양수) 프로퍼티 네임
// 프로퍼티 네임에는 숫자형(양수)를 작성해서 사용할 수도 있음
let myObject = {
  300: '정수',
  1.2: '소수',
};
// 실제 사용 될 때는 문자열로 형 변환이 되어 사용됨
// 이렇게 예외적인 파라미터 네임은 접근할 때도 대괄호 표기법으로만 접근 가능

console.log(myObject['300']);
console.log(myObject['1.2']);
// console.log(myObject.300); // Error
// console.log(myObject.1.2); // Error

// 정수형 프로퍼티 네임
// for in문을 사용할 때 주의해야 할 순간은 바로 정수형 프로퍼티 네임이 있을 때 임
// 객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고,
// 나머지 프로퍼티들은 추가한 순선대로 정렬하는 특징

let myObject = {
  3: '정수3',
  name: 'codeit',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
};

for (let key in myObject) {
  console.log(key);
}

// 1 2 3 nmae birthDay 순으로 나옴
// 정수형 프로퍼티에 따옴표를 붙여 문자열처럼 만들더라도, 정렬 방식은 동일하게 처리됨
