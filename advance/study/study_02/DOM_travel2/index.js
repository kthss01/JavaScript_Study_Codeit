const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
// 메소드를 호출한 노드의 제일 첫 번째 노드로 추가
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
// 노드의 제일 마지막 자식 노드로
tomorrow.append(last);

// 메소드를 호출한 노드의 앞/뒤 쪽 형제 노드로 추가
const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);
tomorrow.before("문자열"); // 요소 노드를 추가할 때만 사용되는 것이 아니라
// 파리멑로 문자열을 전달해도 자동으로 텍스트 노느가 생성이되어서 추가됨
// 파라머티러를 여러개 넣으면 전달한 순서대로 추가도 가능
// preend before의 경우에는
// 요소를 앞으로 추가하기 때문에 여러 개의 값을 전달하게 되면
// 역순으로 추가할 거라는 오해가 있는데
// 그냥 전달한 순서 그대로 파라미터를 한 번에 해당 위치에 추가한다고 생각하면 됨

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);

// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 삭제하기: Node.remove()
// tomorrow.remove();
// today.children[2].remove();

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);
tomorrow.children[1].after(today.children[1]);
tomorrow.children[2].before(today.children[1]);
tomorrow.lastElementChild.before(today.children[1]);

