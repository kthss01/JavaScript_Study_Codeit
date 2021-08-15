// Promisify

// setTimeout 예시
function wait(text, milliseconds) {
    // 이렇게 작성시 undefined 출력됨
    // setTimeout(() => text, milliseconds);
    // Promisify
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    });
    return p;
}

function compute() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.text())
        // 2초 후에 리스폰스의 내용 뒤에 by Codeit 추가하고 리턴
        .then((result) => wait(`${result} by Codeit`, 2000))
        .then((result) => {
            console.log(result);
        });
}

// 콜백 헬(callback hell)
// Node.js 환경임 실행시키지말고 참고만 하자

function readFile_promisified(filename) {
    const p = new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, data) => {
            if (error) {
                reject(error); // 에러 발생 시 -> rejected
            } else {
                resolve(data); // 파일 내용 읽기 완료 -> fulfilled
            }
        });
    });
    return p;
}

function _compute() {
    // callback hell
    // fs.readFile('file1.txt', 'utf8', (error1, data1) => {
    //     if (error1) {
    //         console.log(error1);
    //     } else {
    //         console.log(data1);
    //         fs.readFile('file2.txt', 'utf8', (error2, data2) => {
    //             if (error2) {
    //                 console.log(error2);
    //             } else {
    //                 console.log(data2);
    //                 fs.readFile('file3.txt', 'utf8', (error3, data3) => {
    //                     if (error3) {
    //                         console.log(error3);
    //                     } else {
    //                         console.log(data3);
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // });

    readFile_promisified('file1.txt')
        .then((data) => {
            console.log(data);
            return readFile_promisified('file2.txt');
        })
        .then((data) => {
            console.log(data);
            return readFile_promisified('file3.txt');
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Promisify를 하면 안되는 함수 
// (콜백 여러 번 실행하는 함수 : setInterval, addEventListener 등)
const box = document.getElementById('test');
let count = 0;

function addEventListener_promisified(obj, eventName) { // 이런 Promisify는 하지 마세요
  const p = new Promise((resolve, reject) => {
    obj.addEventListener(eventName, () => { // addEventListener 메소드
      count += 1;
      resolve(count);
    });
  });
  return p;
}

function compute2() {
    addEventListener_promisified(box, 'click')
        .then((eventCount) => { console.log(eventCount); });
}

export default compute;