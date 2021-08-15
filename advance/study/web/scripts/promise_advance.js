// 여러 Promise 객체를 다루는 방법 (심화)

// all 메소드
// 새로운 promise 객체 리턴
// 배열 안에 모든 Promise 객체가 pending 상태에서 fulfilled 상태가 될 때까지 기다림
// 여러 Promise 객체의 작업 성공 결과를 기다렸다가 모두 한 번에 취합하기 위해 사용
// 하나의 Promise 객체라도 rejected 상태가 되면,
// 전체 작업이 실패한 것으로 간주해야 할 때 사용
function compute() {
    // 1번 직원 정보
    const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
    // 2번 직원 정보
    const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
    // 3번 직원 정보
    // const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());
    const p3 = fetch('https://learn.codeit.krㄱㄱ/api/members/3').then((res) => res.json());

    Promise
        .all([p1, p2, p3])
        .then((results) => {
            console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
        });
}

// race 메소드
// 가장 먼저 fulfilled 상태 또는 rejected 상태가 된 Promise 객체와 동일한 상태와 결과를 갖게됨
function compute2() {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Success'), 1000);
    });
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('fail')), 2000);
    });
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('fail2')), 4000);
    });

    Promise
        .race([p1, p2, p3])
        .then((result) => {
            console.log(result); // Success 출력 (가장 먼저 라)
        })
        .catch((value) => {
            console.log(value);
        });
}

// allSettled 메소드
// 참고 : settled fulfilled 상태와 rejected 상태를 묶어서 settled 상태라고 함
// 배열 속 Promise 객체들이 setteld 상태가 되기만 하면 됨
/*
    // 이와 같은 형태로 결과가 반환됨
    [
        {status: "fulfilled", value: 1},
        {status: "fulfilled", value: 2},
        {status: "fulfilled", value: 3},
        {status: "rejected",  reason: Error: an error}
    ]
*/

// any 메소드 
// 여러 Promise 객체들 중에서 가장 먼저 fulfilled 상태가 된 Promise 객체의 상태와 결과가 반영
// 만약 모든 Promise 객체가 rejected 상태가 되어버리면 
// AggregateError 에러를 작업 실패 정보로 갖고 rejected 상태가 됨
// 배열 속의 Promise 객체 중 단 하나라도 fulfilled 상태가 되면 되는 거

// export default compute;
export default compute2;