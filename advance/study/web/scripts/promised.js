// 이미 상태가 결정된 Promise 객체

// function doSomething(a, b) {
//     //~~
//   if (problem) {
//     throw new Error('Failed due to..'));
//   } else {
//     return fetch('https://~');
//   }
// }

function doSomething(a, b) {
    // ~~
    if (problem) {
        // 이런식으로 사용
        return Promise.reject(new Error('Failed due to..'));
    } else {
        return fetch('https://~');
    }
}

function compute() {
    // fulfilled 상태의 Promise 객체 만들기
    const p = Promise.resolve('success');
    p.then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });

    // rejected 상태의 Promise 객체 만들기
    const p2 = Promise.reject(new Error('fail'));
    p2.then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });
}

function compute2() {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
        }, 2000); // 2초 후에 fulfilled 상태가 됨
    });

    p.then((result) => {
        console.log(result);
    }); // Promise 객체가 pending 상태일 때 콜백 등록
    setTimeout(() => {
        p.then((result) => {
            console.log(result);
        });
    }, 5000); // Promise 객체가 fulfilled 상태가 되고 나서 콜백 등록 
}

export default compute;