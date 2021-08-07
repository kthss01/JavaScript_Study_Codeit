/*
    태그 정리하기

    tags.js라는 파일 만듬
    tags.js 파일에는 기능 개발에 필요한 요소 노들이 각 변수에 할당되어 있음

    사용하기 위해 export 하고 import 하기
*/


import { addMenu } from './add.js';
import { deleteMenu } from './delete.js';
// addBtn, addInput, list 를 import해 주세요.
import { addBtn, addInput, list } from './tags.js';

const data = [];

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
