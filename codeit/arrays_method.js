// 배열의 메소드 (Array's Method)
let members = ['쿤갈레', 'Zerrad66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(members);
delete members[4];
console.log(members);

// splice - 접착
members.splice(4); // 배열 요소 삭제
console.log(members);

// splice(startIndex, deleteCount)
// members.splice(1); // 1번 인덱스 이후에 모든 요소들이 삭제됨
members.splice(1,2); // 1번 인덱스부터 2개 삭제

// splice(startIndex, deleteCount, item) - 삭제한 요소 자리에 그 값 추가
members.splice(1, 1, 'NiceCodeit', 'HiCodeit'); // 2개 넣으면 밀림
console.log(members);

// 요소 추가
members.splice(1, 0, 'HelloSplice', 'test'); // 1번 인덱스에 추가
console.log(members);

// 요소 수정
members.splice(1, 1, 'HelloSplice', 'test2'); // 1번 인덱스 지우고 추가해서 수정
console.log(members);

// 정리
// splice(startIndex, deleteCount, item)
// 배열의 첫 요소를 삭제
members.splice(0, 1);
// 배열의 마지막 요소를 삭제
members.splice(members.length-1, 1);
// 배열의 첫 요소로 값 추가
members.splice(0, 0, 'NiceCodeit');
// 배열의 마지막 요소로 값 추가
members.splice(members.length, 0, 'HiCodeit')

// 배열의 첫 요소를 삭제 : shift()
members.shift();
console.log(members);
// 배열의 마지막 요소를 삭제 : pop()
members.pop();
console.log(members);
// 배열의 첫 요소로 값 추가 : unshift(value)
members.unshift('NiceCodeit');
console.log(members);
// 배열의 마지막 요소로 값 추가 : push(value)
members.push('HiCodeit');
console.log(members);


// indexOf, lastIndexOf
// 배열에서 특정 값 찾기
// 포함되어 있다면 item이 있는 인덱스 리턴
// 없으면 -1 리턴
// 여러개면 처음 발견된 인덱스 리턴
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao')); // 1
console.log(brands.indexOf('Daum')); // -1

// includes
// 배열에서 특정 값이 있는지 확인 있으면 true, 없으면 false
console.log(brands.includes('Kakao')); // true
console.log(brands.includes('Daum')); // false

// reverse
// 배열 뒤집기
console.log(brands);
brands.reverse();
console.log(brands);


// for ... of
let influencer = ['suwonlog', 'smali.tiger', 'Minam.ludens', 'cu_convenience24'];

for (let i = 0 ; i < influencer.length; i++) {
  console.log(influencer[i]);
}

// for (변수 of 배열) {
//   동작부분;
// }
for (let element of influencer) {
  console.log(element);
}

for (let index in influencer) {
  console.log(influencer[index]);
}
