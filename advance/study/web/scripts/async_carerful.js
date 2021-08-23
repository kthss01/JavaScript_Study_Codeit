// async 함수를 작성할 때 주의해야할 성능 문제 (심화)

// 순차적인 작업 처리를 하는 async 함수
// 순서가 상관없는 경우 이 코드는 성능 관점에서 아쉬운 코드
async function getResponse(urls) {
    for (const url of urls) {
        // const response = await fetch(url);
        // console.log(await response.text());
        
        // 순서 상관없는 경우
        (async () => {
            const response = await fetch(url);
            console.log(await response.text());
        })(); // 즉시 실행되는 async 함수로 감싸줌 (IIFE)
        // 이렇게하면 이전 URL에 대한 리스폰스가 오기까지를 기다리지 않음
        // 일단 모든 URL에 대한 리퀘스트를 쭉 보내버리고,
        // 먼저 리스폰스가 오는 순서대로 그 내용이 출력됨

        // async 함수 안에서 무언가 반복 처리하는 코드를 쓸 때 유의
    }


}
