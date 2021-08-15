// Promise finally 메소드

function compute() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://jsonplaceholder.typicode.commm/users')
        .then((response) => response.text())
        .then((result) => {
            console.log(result);
            //throw new Error('test');
        })
        .catch((error) => {
            console.log(error);
            throw new Error('from catch method');
        })
        // 상태에 상관없이 finally 메소드 호출
        // 작업 성공결과나 실패 정보 필요없어서 파라미터 필요 없음
        .finally(() => { console.log('exit'); });
}

export default compute;