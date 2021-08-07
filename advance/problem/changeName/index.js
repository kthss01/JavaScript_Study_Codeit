/*
    이름 바꿔 붙이기

    deleteMenuByIndex deleteMenu 이름으로 쓰고 싶어함
*/

import { addMenu } from './add.js';
// 여기에 코드를 작성해 주세요.
import { deleteMenuByIndex as deleteMenu } from './delete.js';

const data = [];
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');
const list = document.querySelector('.list');

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
