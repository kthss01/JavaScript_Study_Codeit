// promise rejected 상태

function compute() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text(), 
        // 인터넷등을 끊어서 에러 발생하면 에러 출력됨
        // TypeError : Failed to fetch
            (error) => { console.log(error); })
        .then((result) => { console.log(result); });
}

export default compute;