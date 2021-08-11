
// fecth 함수 
function compute() {
    // 이런식으로 접근 안되는듯 block 됨
    // CORS policy :  No 'Access-Control-Allow-Origin'
    // 개발자 도구 console에서만 쓸 수 있어보임
    // 주소도 google.com에 들어가서 해야 받아지는거 같음
    fetch('https://www.google.com')
    // fetch('https://www.naver.com')
    // fetch('https://workey.codeit.kr/ratings')
        // 아래 메소드는 서버의 response가 온 후에 실행되는 함수 - 콜백 함수
        .then((response) => response.text())
        .then((result) => { console.log(result); });
}

export default compute;