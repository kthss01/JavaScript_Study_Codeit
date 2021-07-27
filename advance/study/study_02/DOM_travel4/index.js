// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
// 따로 추가하고 싶을 때 add 사용
const item = tomorrow.children[1];
item.classList.add('done'); 
item.classList.add('done'); // 중복으로 해도 결국 하나만 추가됨
item.classList.remove('done'); // 여러개 파라미터 넣을 수 잇음
item.classList.toggle('done'); // 있으면 제거 없으면 추가
// toggle의 경우 여러 개 파라미터 전달한다고 해서 여러 개의 클래스 toglle하지는 않음
// 두 번째 파라미터는 boolean 형태의 값을 전달 받아 true면 add만 false면 remove 기능만 하도록 함

// elem.className
// 아예 바뀌어버림
today.children[1].className = 'done';

// style 프로퍼티
// 여러 단어를 이어서 만든 속성은 카멜 표기법 사용함
// 이 방법은 인라인 스타일 방법이라 잘 사용하지 않는다고함
// 클래스 이름 변경으로 많이 쓴다고함
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';