/*
    가져와서 다시 내보내기

    functions 폴더 안에 자바스크립트 모듈 파일을 하나로 관리하기
*/

import { addBtn, addInput, list, rollBtn } from './tags.js';
// 여기에 코드를 작성해 주세요.
import { addMenu, deleteMenu, rollMenu } from './functions.js';

const data = [];

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
rollBtn.addEventListener('click', () => list.classList.contains('rolling') || rollMenu(data));
