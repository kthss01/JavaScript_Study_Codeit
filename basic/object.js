// 객체 (Object)
let codeit = {
  name : '코드잇',
  bornYear : 2017,
  isVeryNice : true,
  worstCourse : null,
  bestCourse : {
    title : '자바스크립 프로그래밍 기초',
    language : 'JavaScript'
  },
  'test test' : 'test'
};

console.log(typeof codeit); // object 라고 나옴


/*
  '' 안하고 프로퍼티 네임 작성시 주의사항 (안해도 문자열 처리해줌)
  1. 첫 번째 글자는 반드시 문자, 밑줄(_), 달러 기호($) 중 하나로 시작
  2. 띄어쓰기 금지
  3. 하이픈(-) 금지
  이 규칙 벗어나면 따옴표('')로 작성
*/

// 객체에서 데이터 접근하기
// 점 표기법 (objectName.propertyName)
console.log(codiet.bornYear); // 이렇게하면 따옴표를 생략할 수 없는 프로퍼티에는 접근 불가

// 대괄호 표기법 (objectName['propertyName'])
console.log(codeit['test test']); // 따옴표 생략 할 수 없는 프로퍼티는 대괄호 표기법으로 접근
console.log(codeit['test ' + 'test']) // 이렇게 접근도 가능

let propertyName = 'name';
console.log(codeit[propertyName]);

// 객체 안에 객체는 . . 으로 접근
console.log(codeit.bestCourse.title);

// 존재하지 않는 프로퍼티에 접근하면 undefined 리턴
console.log(codeit.bestCourse['teacher']); // undefined

// 객체 다루기
// 프로퍼티 수정
console.log(codeit.name);
codeit.name = 'codeit';
console.log(codeit.name);

// 프로퍼티 추가
console.log(codeit.ceo); // undefined
codeit.ceo = '강영훈';
console.log(codeit.ceo); // 강영훈

// 프로퍼티 삭제
console.log(codeit.worstCourse); // null
delete codeit.worstCourse
console.log(codeit.worstCourse); // undefined

// 존재하지 않는 프로퍼티 값은 undefined
// 따라서 undefined 인지 아닌지로 프로퍼티 있는지 확인 가능
console.log(codeit.name !== undefined);

// in 연산자 활용
// 'propertyName' in object
// 좀더 안전한 방법
// 프로퍼티에 undefined 를 할당 할 수도 있기 때문
console.log('name' in codeit);

codeit.worstCourse = undefined;
console.log(codeit.worstCourse !== undefined);
console.log('worstCourse' in codeit);

if ('name' in codeit) {
  console.log(`name 값은 ${codeit.name}입니다.`);
} else {
  console.log(`name 프로퍼티는 존재하지 않습니다.`);
}

// 객체와 메소드
// 메소드 (Method) : 프로퍼티의 값을 함수로 넣어주는 거
let greetings = {
  sayHello: function(name) {
    console.log(`Hello! ${name}!`);
  },
  sayHi: function() {
    console.log('Hi!');
  },
  sayBye: function() {
    console.log('Bye!'); // 사실 콘솔도 콘솔이란 객체의 log 메소드가 있는 거
  }
};

greetings.sayHello('Codeit');

// 메소드는 점 표기법으로 주로 하지만 대괄호 표기법으로 해도 문제 없음
greetings['sayHello']('Codeit');

// 메소드 사용 이유
// 메소드는 어떤 객체의 고유한 동작으로서 함수에 의미를 부여할 수 있기 때문

let rectAngle = {
  width: 30,
  height: 50,
  getArea: function() {
    return rectAngle.width * rectAngle.height;
  }
};

let triAngle = {
  width: 15,
  height: 40,
  getArea: function() {
    return triAngle.width * triAngle.height / 2;
  }
};
// 메소드를 활용하면 다른 함수의 이름 중복을 피할 수도 있고
// 좀 더 이 객체에 집중해서 함수의 동작 부분을 작성할 수 있음
// 그리고 사용할 때도 이 객체의 고유한 동작으로 구분할 수 있기 때문에
// 좀 더 의미 있는 코드로 활용이 가능한 장점도 있음
