// async/await이란?

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.text())
//     .then((result) => { console.log(result); });

// await asnyc 함수안에서만 사용 가능
// await is only valid in async function 에러 발생

// console.log 숫자 순서대로 출력된다고 보면 됨 

async function fetchAndPrint() {
    console.log(2);

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    console.log(7);

    const result = await response.text();
    console.log(result);

    console.log(8);
}

function compute() {
    console.log(1);
    fetchAndPrint();
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
}


// export default fetchAndPrint;
export default compute;