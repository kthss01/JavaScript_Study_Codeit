/*
    줄임말 대잔치

    arguments 객체를 활용해서 함수를 호출할 때 
    전달하는 단어들의 첫 글자만 따서 줄임말을 만들어주는 firstWords 함수 완성
*/

function firstWords() {
    let word = '';
  
    for (let arg of arguments) {
        word += arg[0];
    }
  
    console.log(word);
  }
  
  firstWords('나만', '없어', '고양이');
  firstWords('아니', '바나나말고', '라면먹어');
  firstWords('만두', '반으로', '잘라먹네', '부지런하다');
  firstWords('결국', '자바스크립트가', '해피한', '지름길');
  firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');