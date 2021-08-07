/*
    메뉴 기능 추가 붙이기

    addMenu라는 함수만 외부로 공개하고
    index.js에서 이 함수를 불러와 활용하고 싶어함
*/

// 여기에 코드를 작성해 주세요.
import { addMenu } from "./add.js";

const data = [];
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
