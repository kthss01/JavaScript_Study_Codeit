// promise catch 메소드

function compute() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.text(), 
    // // 인터넷등을 끊어서 에러 발생하면 에러 출력됨
    // // TypeError : Failed to fetch
    //     (error) => { console.log(error); })
    // .then((result) => { console.log(result); });

    // 존재하지 않을 url 적어서 fetch 작업 실패
    // fetch('https://jsonplaceholder.typicode.commmm/users')
    //     .then((response) => response.text())
    //     // rejected 상태가 되면 실행할 콜백 등록
    //     .catch((error) => { console.log(error); })
    //     // catch 아래 then 메소드와 같은 의미
    //     // .then(undefined, (error) => { console.log(error); })
    //     .then((result) => { console.log(result); });
}

// catch 메소드는 마지막에 작성
function compute2() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.text())
    //     // catch 메소드 마지막에 써줘야함
    //     .catch((error) => { console.log(error); })
    //     // 뒤에서 에러 발생시키면 catch가 못잡음
    //     .then((result) => { 
    //         console.log(result); 
    //         throw new Error('test');
    //     });

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text())
        .then((result) => {
            console.log(result);
            throw new Error('test');
        })
        // catch 메소드 마지막에 써줘야함
        .catch((error) => {
            console.log(error);
        });
}

// catch 메소드 여러개 쓰는 경우
// Promise Chain 중간중간에 쓰는 경우도 존재함
// 만약 중간에 에러가 발생해도 catch 메소드가 그 대안을 뒤로 넘겨줄 수 있으면
// catch 메소드를 중간에 써도 됨
function compute3() {
    fetch('https://friendbook.com/my/newsfeeds')
        .then((response) => response.json()) // -- A
        .then((result) => { // -- B
            const feeds = result;
            // 피드 데이터 가공...
            return processedFeeds;
        })
        // 에러가 발생했다고 해도 만약 실패한 작업 대신
        // 다른 방법을 통해서 작업을 정상적으로 끝마칠 수 있는 상황
        .catch((error) => { // -- C
            // 미리 저장해둔 일반 뉴스를 보여주기  
            const storedGeneralNews = getStoredGeneralNews();
            return storedGeneralNews;
        })
        .then((result) => {
            /* 화면에 표시 */ }) // -- D
        .catch((error) => {
            /* 에러 로깅 */ }); // -- E
}

export default compute;