// 배열 (Array)
let courseRanking = {
  '자바스크립트 프로그래밍 기초'
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
};

// index = PropertyName
// 요소에 접근하는 것을 인덱싱(indexing) (0, 1, 2, ...)
// console.log(배열이름[index]);
console.log(courseRanking[2]);

let members = ['쿤갈레', 'Zerrad66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(typeof members); // object

console.log(members.length); // 배열 길이
console.log(members['length']); // 대괄호 표기법으로도 접근 가능
console.log(members[members.length-1]);

// 요소 추가
console.log(members[5]); // undefined
members[5] = 'NiceCodeit';
console.log(members[5]); // NiceCodeit

members[7] = 'test'; // 이러면 6번에는 empty라고 표시 하지만 배열길이에는 포함됨

// 요소 수정
members[3] = 'kthtim';

// 요소 삭제
console.log(members);
delete members[1];
console.log(members); // 해당 요소 사실 empty로 남아있음 완전히 삭제되었다고 보긴 힘듬
