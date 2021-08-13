function compute() {
    // fetch 함수와 비동기 실행

    console.log('Start!');

    // request 보내고 객체 리턴 
    // 객체의 then 메소드에 콜백 등록
    // 두번째 then 메소드 첫번째 then 콜백이 실행되면 다음에 실행됨    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    .then((result) => { console.log(result); });
    
    // then 메소드는 단지 콜백 등록만 함 콜백 실행하는건 아님
    console.log('End');

    /*
        출력 순서
        Start!
        End
        서버가 보내준 Response 순으로 출력됨
    */


}

function compute2() {
    // promise 객체 이해를 통한 fetch 재해석

    console.log('Start!');

    // then 메소드 promise 객체의 메소드
    // pending 상태에서 fulfilled 상태가 되었을 때 실행할 콜백 등록을 위한 메소드
    // request 보내고 response 정상적으로 받았을 때 fulfilled 됨
    // 작업 성공 결과는 서버가 보내준 response
    // 첫번째 콜백 parameter로 받음
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    .then((result) => { console.log(result); });
    
    console.log('End');
}

function compute3() {
    // Promise Chaining

    // chainig 이어붙이기, 연결하기

    console.log('Start!');

    fetch('https://jsonplaceholder.typicode.com/users')
    // response.text()가 리턴하는 값이 promise 객체임
    .then((response) => response.text())
    // 첫번째 콜백이 실행되고 나서 두번째 콜백 실행
    // then 메소드 계속해서 붙일 수 있음
    // promise 객체 계속 연결하는거

    // then 메소드가 새로운 promise 객체 리턴함 -> 그래서 계속 then 메소드 붙여나가는거
    // then 메소드가 리턴하는 promise 처음에는 pending 상태
    // 콜백에서 리턴하느냐에 따라 promise 영향을 받음
    // promise 리턴하는 경우
    // 콜백이 리턴한 promise 상태와 같은 상태가 됨 (fulfilled -> fulfilled, rejected -> rejected)
    // promise가 아닌 값 리턴하는 경우
    // 숫자, 문자열, 일반 객체 리턴하면 fulfiled 상태가 됨 (작업 성공 결과)
    .then((result) => {
        const users = JSON.parse(result);
        return users[0]; // 일반 객체라 fulfilled 상태가 됨
    })
    .then((user) => {
        console.log(user);
        // 객체 구조분해 (Destructuring)
        const { address } = user;
        return address;
    })
    .then((address) => {
        console.log(address);
        const { geo } = address;
        return geo;
    })
    .then((geo) => {
        console.log(geo);
        // 경도
        const { lat } = geo;
        return lat;
    })
    .then((lat) => {
        console.log(lat);
    })
    
    console.log('End');

}

function compute4() {
    // Promise Chaining이 필요한 경우

    console.log('Start!');

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    // 사실 이전 코드 이렇게 써도 되었음
    // .then((result) => {
    //     const users = JSON.parse(result);
    //     const user = users[0];
    //     console.log(user);
    //     const { address } = user;
    //     console.log(address);
    //     const { geo } = address;
    //     console.log(geo);
    //     const { lat } = geo;
    //     console.log(lat);
    // });

    // .then((result) => {
    //     const users = JSON.parse(result);
    //     const { id } = users[0];
    //     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //         .then((response) => response.text())
    //         .then((posts) => {
    //             console.log(posts);
    //         });
    // });

    // 이렇게 사용하기 위해서 사용함
    // 콜백 안에서 then 메소드 쓸 필요 없음
    .then((result) => {
        const users = JSON.parse(result);
        const { id } = users[0];
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    })
    // 여기서부터는 리턴한 fetch response라고 보면 됨
    .then((response) => response.text())
    .then((posts) => {
        console.log(posts);
    });
    
    console.log('End');
}

export default compute4;
