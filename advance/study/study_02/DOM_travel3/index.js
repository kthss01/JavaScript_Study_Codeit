// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// 메소드 모두 대소문자 구분 x
// HTML 표준 속성은 모두 소문자이기 때문에
// 속성 이름에 대문자를 섞어 사용하더라도 소문자로 변환돼서

// elem.getAttribute('속성'): 속성에 접근하기
// 메소드로 접근하면 표준, 비표준 상관없이 접근 가능
console.log(tomorrow.getAttribute('href')); 
console.log(item.getAttribute('class')); // class라는 문자열 그대로 전달해줘도 됨 className은 프로퍼티 이름으로 접근할 때

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
// 기존에 없었던 속성의 경우 추가, 존재하면 수정
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'https://www.codeit.kr'); // 수정

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href'); 
tomorrow.removeAttribute('class'); 

// id 속성
console.log(tomorrow);
console.log(tomorrow.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);
console.log(link.href);
console.log(tomorrow.href); // 비표준이라 직접 접근 불가