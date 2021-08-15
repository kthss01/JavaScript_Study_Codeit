// 직접 만들어보는 Promise 객체

function compute() {
    // executor 함수 (resolve, reject)
    // resolve fulfilled 상태로 만들 수 있는 함수 연결
    // reject rejected 상태로 만들 수 있는 함수 연결
    const p = new Promise((resolve, reject) => {
        // 2초 후에 fulfilled 상태가 됨, success 작업 성공 결과가 됨
        //setTimeout(() => { resolve('success'); }, 2000);
        // 2초 후 rejeceted 상태가 됨, 파라미터가 작업 실패 이유
        setTimeout(() => { reject(new Error('fail')); }, 2000);
    });

    // p.then((result) => { console.log(result); });
    p.catch((error) => { console.log(error); });
}

export default compute;