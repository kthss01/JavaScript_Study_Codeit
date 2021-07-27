// window: 전역객체 Global Object
console.log(window);
console.log(window.innerWidth); // 탭 내부의 너비 높이 값
console.log(window.innerHeight);

window.console.log(window);
window.console.log(window.innerWidth);
window.console.log(window.innerHeight);

// 윈도우 객체의 open 메소드를 활용하면 새로운 창 열림
// close 메소드 호출하면 탭 닫힘

// 윈도우 객체 안의 document 프로퍼티도 있고
// console 프로퍼티도 있음
// 이 윈도우 객체는 브라우저의 창을 대변하면서
// JavaScript에서는 최상단에 존재하는 객체이기도 함
// 최상단이란 말은 윈도우 객체가 JavaScript의 다른 모든 객체를 포함하고 있다는 뜻
// 내장 객체, 내장 함수들이 이 윈도우 객체에 속해있다는 것
// 이 윈도우 객체는 JavaScript 코드의 어느 곳에서나 접근 가능
// 그래서 이 윈도우 객체를 전역 객체 (Global Object)라고 부름
// 따라서 window. 을 붙이지 않아도 된다는 규칙이 있음