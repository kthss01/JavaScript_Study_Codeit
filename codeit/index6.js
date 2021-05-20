// 피보나치 수열
let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous; // previous를 임시 보관
  previous = current;
  current = current + temp;
}

// 재귀
// function fibo(num) {
//   if (num < 2)
//     return num;
//
//   return fibo(num-1) + fibo(num-2);
// }
