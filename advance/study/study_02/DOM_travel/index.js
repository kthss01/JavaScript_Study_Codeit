// DOM 트리 여행하기
const myTag = document.querySelector('#list-1');

console.log(myTag);

// 형제 요소 노드
console.log(myTag.previousElementSibling); // 없으면 null 리턴
console.log(myTag.nextElementSibling);

// 부모 요소 노드
console.log(myTag.parentElement); // body 태그

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

// 연결해서도 가능
console.log(myTag.parentElement.nextElementSibling); // script 태그

// DOM 프로퍼티
const myTag = document.querySelector('#list-1');

// textContext
// innerHTML과 비슷
// 요소 안에 있는 내용들 중에서 HTML을 제외한 텍스트만 가져옴
// textContent는 텍스트만 다루기 때문에 특수 문자도 텍스트로 처리함
// 사용자의 입력값을 웹 페이지에 반영해야 될 때
// innerHTML보다는 textContent를 활용하면
// 원하지 않는 HTML 코드가 웹 페이지에 추가되는 걸 방지할 수 있음
console.log(myTag.textContent);

// outerHTML
// 해당 요소를 포함한 전체 HTML 코드를 문자열로 리턴
// outerHTML에 새로운 HTML 코드 할당 할 수 있음
// outerHTML은 해당 요소 자체를 가리키는 특성 때문에
// 요소 자체가 새로운 요소로 교체되는 결과를 얻게 됨
// outerHTML에 값을 할당하게 되면 처음 선택한 요소는 사라짐
console.log(myTag.outerHTML);

// innerHTML
// 요소 안에 있는 HTML 자체를 문자열로 리턴
// 태그와 태그 사이의 줄바꿈이나 들여쓰기 같은 부분들도 모두 포함됨
// innerHTML - 요소 안에 HTML을 확인하는 것보다는
// 요소 안에 HTML을 수정할 때 좀 더 자주 활용
console.log(myTag.innerHTML);