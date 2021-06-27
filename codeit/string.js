// String
let myString = 'Hi Codeit';

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2)); // 0 ~ 1 인덱스까지 Hi
console.log(myString.slice(3)); // 3부터 끝까지 Codeit
console.log(myString.slice()); // 모두 생략하면 전체 Hi Codeit


// 양 끝 공백 제거
let myString2 = '   Hi Codeit   ';
console.log(myString2.trim());

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자

// 요소 탐색
// 없으면 -1
console.log(myString.indexOf('i')); // 앞 부터 1
console.log(myString.lastIndexOf('i')); // 뒤 부터 7

// 요소 접근
console.log(myString[3]); // 대괄호 표기법 C
console.log(myString.charAt(3)); // charAt 메소드 C

// 문자열의 길이
console.log(myString.length); // length 프로퍼티
