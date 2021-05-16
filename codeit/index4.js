// 탬플릿 문자열 (template strings)
// template: 일정한 틀, 형식
let year = 2021;
let month = 5;
let day = 16;

console.log(`${year}.${month}.${day}`);

ley myNumber = 3;

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
