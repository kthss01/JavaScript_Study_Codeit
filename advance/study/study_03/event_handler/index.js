// 이벤트 등록하기
let btn = document.querySelector('#myBtn');

// 이 방법은 기존에 있던 값을 덮어쓰는 형태로 동작함
// 따라서 실제로 중요한 이벤트를 덮어쓰는 실수를 할 수도 있고
// 또 여러 개의 이벤트 핸들러를 다룰 수 없다는 단점이 있음
// btn.onclick = function () {
// 	console.log('Hi Codeit!');
// };

function event1() {
	console.log('Hi Codeit!');
}

function event2() {
	console.log('Hi again!');
}

// 하나의 이벤트 안에 다시 여러 개의 이벤트 핸들러를 넣는 방법이 있긴함
// 이것도 중간에 새로운 이벤트를 추가하거나
// 이 중 하나를 제거해야 하는 상황은 대처하기 어려움
// 각 이벤트 별로 리턴 값이 있는 경우에도 문제가 생김
// btn.onclick = function() {
//     event1();
//     event2();
// }

// 핸들러 매개변수로 넣을때 소괄호()는 쓰는거 아님

// elem.addEventListener(event, handler)
btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

// 삭제할 때는 해당 이벤트를 똑같이 넣어주어야함
// 익명함수로 만든다면 다시 익명함수로 삭제하더라도 정상적으로 삭제되지 않음
// 서로 다른 함수이기 때문
// elem.removeEventListener(event, handler)
btn.removeEventListener('click', event2);