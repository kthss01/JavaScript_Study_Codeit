// async 함수는 Promise 객체를 리턴합니다
async function fetchAndPrint() {
    // try {
    //     const response = await fetch('https://jsonplaceholder.typicode.commm/users');
    //     const result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.log(error);
    // } finally {
    //     console.log('exit');
    // }

    // return 3; // 단순히 3 리턴하는게 아님
    // 숫자 3을 작업 성공 결과로 가진 fulfilled 상태의 Promise 객체를 리턴함

    // Promise 객체 리턴
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text());
}

export default fetchAndPrint;