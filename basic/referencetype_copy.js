// 참조형 복사하기 (Reference Type Copy)
let numbers1 = [1, 2, 3];
// let numbers2 = numbers1; // 이렇게 하면 얕은 복사
let numbers2 = numbers1.slice(); // 이렇게하면 깊은 복사

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);

let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

// let course2 = course1; // 얕은 복사
let course2 = Object.assign({}, course1); // 깊은 복사

let course2 = {};
// for문 활용 깊은 복사
for (let key in course1) {
  course2[key] = course1[key];
}

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);


// 이렇게 안에 참조형 자료형이 있으면 slice나 assign 쓸 때 문제 생길 수 있음
let course3 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
  prerequisite: []
};

let course4 = Object.assign({}, course3);
course4.prerequisite.push('파이썬 프로그래밍 기초');
// 해결 방법은 typeof 프로퍼티가 object인지 보고 처리하면 되긴함

function cloneObject(object) {
  if (object === null || typeof object !== 'object') {
    return object;
  }

  let temp;
  if (Array.isArray(object)) {
    temp = [];
  } else {
    temp = {};
  }

  for (let key of Object.keys(object)) {
    temp[key] = cloneObject(object[key]);
  }

  return temp;
}
