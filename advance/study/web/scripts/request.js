// request
/*
    연습용 url
    https://learn.codeit.kr/api/members
*/

function compute() {
    // GET request
    // fetch('https://learn.codeit.kr/api/members')
    //     .then((response) => response.text())
    //     .then((result) => {
    //         console.log(result);
    //     });

    // fetch('https://learn.codeit.kr/api/members/3')
    //     .then((response) => response.text())
    //     .then((result) => {
    //         console.log(result);
    //     });

    // POST request
    // 추가할 정보를 body에 넣어줘야함
    // 새로운 직원 정보 객체
    // const newMember = {
    //     name: 'Jerry',
    //     email: 'jerry@codeitmall.kr',
    //     department: 'engineering',
    // };

    // fetch('https://learn.codeit.kr/api/members', {
    //     // option 객체
    //     // 각종 설정을 적는 부분
    //     // 아무 설정도 안하면 기본적으로 GET request를 보내게됨
    //     method: 'POST', // method POST 로 설정
    //     body: JSON.stringify(newMember), // body에 담을 내용 설정
    //     // newMember 객체 바로 넣은게 아니고 JSON.stringify 
    //     // parse와는 정반대 역할 stringify : javascript 객체 -> JSON 객체로
    //     // javascript 객체 외부로 그냥 전달 불가
    // })
    //     .then((response) => response.text())
    //     .then((result) => { console.log(result); });
    // response 보면 id 값이 추가되어있음
    // db에서 고유로 식별하는 값을 id로 보통 함
    // response 서버마다 다름 잘 출력되었다는 문자 주기도하고
    // 실제 데이터 보여주기도 함 개발자의 설계에 따라 달라짐

    // PUT DELETE request는 그냥 index.js 호출로 왜 안되는지 모르겠음

    // PUT request
    // const member = {
    //     name: 'Alice',
    //     email: 'alice@codeitmall.kr',
    //     department: 'marketing',
    // };

    // fetch('https://learn.codeit.kr/api/members/2', {
    //         method: 'PUT',
    //         body: JSON.stringify(member),
    //     })
    //     .then((response) => response.text())
    //     .then((result) => {
    //         console.log(result);
    //     });

    // DELETE request
    fetch('https://learn.codeit.kr/api/members/2', {
            method: 'DELETE',
        })
        .then((response) => response.text())
        .then((result) => {
            console.log(result);
        });
}

export default compute;