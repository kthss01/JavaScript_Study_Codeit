// 개발자 도구에서 진행하는 부분

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

    // 이 url로 요청하면 다른 형태의 response 받음
    // JSON 포맷
    fetch('https://jsonplaceholder.typicode.com/users')
        // 아래 메소드는 서버의 response가 온 후에 실행되는 함수 - 콜백 함수
        .then((response) => response.text())
        // .then((result) => { console.log(result); });
        // .then((result) => { console.log(typeof result); }); // string 타입임
        
        // 이렇게 하면 string 타입 객체로 변환 가능
        .then((result) => { const user = JSON.parse(result) }); 

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text())
        .then((result) => { 
            const users = JSON.parse(result);
            console.log(users.length);
            users.forEach((user) => {
                // String "name" - 프로퍼티로 변함
                console.log(user.name)
            });
        }); 
}

export default compute;