// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

function printEvent(event) {
  console.log(event);
	event.target.style.color = 'red'; // target은 dom 요소를 담고 있음
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);