// showTitle 함수를 완성해 주세요.
function showTitle(e) {
	// 여기에 코드를 작성해 주세요.
    // console.log(e.target);
    // console.log(e.target.getAttribute('data-title'));

    // const dataTitle = e.target.getAttribute('data-title');

    // dataset 프로퍼티 활용해야 안전함
    // 자바스크립트로 HTML 태그의 비표준 속성을 활용할 때
    // HTML태그에 data-* 형태로 속성을 작성함

    // if (dataTitle) {
    if (e.target.dataset.title) {
        const element = document.createElement("span");
        element.classList.add("title");
        // element.textContent = dataTitle;
        element.textContent = e.target.dataset.title;

        e.target.append(element);
    }
}

// removeTitle 함수를 완성해 주세요.
function removeTitle(e) {
	// 여기에 코드를 작성해 주세요.
    // const dataTitle = e.target.getAttribute('data-title');

    // if (dataTitle) {
    if (e.target.dataset.title) {    
        // console.log(e.target.lastElementChild);
        e.target.lastElementChild.remove();
       
    }
}

// '대상'과 '타입'을 수정해 주세요.
const map = document.querySelector(".map");

map.addEventListener('mouseover', showTitle);
map.addEventListener('mouseout', removeTitle);