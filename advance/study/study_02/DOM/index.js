// DOM (Document Object Model)
console.log(document); // HTML 태그가 출력됨 
console.log(typeof document); // object
console.dir(document); // HTML 태그가 아니라 객체로 보고 싶으면 dir 사용

// DOM (Document Object Model)
const title = document.querySelector('#title');
title.style.color = 'red';