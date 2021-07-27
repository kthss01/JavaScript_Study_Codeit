// id로 태그 선택하기
const myTag1 = document.getElementById('myNumber');
console.log(myTag1);

const myTag2 = document.getElementById('btns');
console.log(myTag2);

const myTag3 = document.getElementById('codeit');
console.log(myTag3); // 존재하지 않는 태그 null 리턴

// class로 태그 선택하기
const myTags1 = document.getElementsByClassName('color-btn');
console.log(myTags1); // HTMLCollection 유사배열임 배열 같아 보이지만 완벽한 배열은 아님
// 배열을 다룰 때 사용하는 splice나 push 같은 메소드는 사용 불가
// 이 배열에 들어가는 순서는 위부터 차례대로임
// div>div>div 형태로로 깊이를 주어도 똑같음
console.log(myTags1[1]);
console.log(myTags1.length);

for (let tag of myTags1) {
	console.log(tag);
}

const myTags2 = document.getElementsByClassName('red');
console.log(myTags2); 
console.log(myTags2[0]); // 하나만 있어도 [0]으로 접근해야함

const myTags3 = document.getElementsByClassName('white');
console.log(myTags3); // 존재하지 않는 태그로 찾으면 빈 HTMLCollection 출력됨
console.log(myTags3 === null);
console.log(myTags3.length);

// css 선택자로 태그 선택하기
const myTag = document.querySelector('#myNumber');
console.log(myTag);

const myTag2 = document.getElementById('myNumber');
console.log(myTag2);

const myTag3 = document.querySelector('.color-btn'); // 가장 첫번째 요소만 선택됨
console.log(myTag3);

const myTags1 = document.querySelectorAll('.color-btn'); // 유사배열이 나오는데 NodeList로 나옴 HTMLCollection과 안은 같음
console.log(myTags1);

const myTags2 = document.getElementsByClassName('color-btn');
console.log(myTags2);

// 이벤트(Event)와 버튼 클릭
const btn = document.querySelector('#myBtn');

// 이벤트 핸들링(Event Handling)
btn.onclick = function() { // 이벤트 핸들러(Event Handler)
	console.log('Hello Codeit!');
};