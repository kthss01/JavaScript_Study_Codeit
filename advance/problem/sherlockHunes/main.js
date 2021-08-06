/*
    셜록 훈즈

    map 메소드 활용해서 Y O U N G 추출한 새로운 배열 answer 변수에 담기
*/

const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성해 주세요.
const answer = quiz.map((ele, i, arr) => {
    return ele[i];
})


// 테스트 코드
console.log(answer);