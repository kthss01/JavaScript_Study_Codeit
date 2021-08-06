/*
    이 중 스파이가 있다

    아래 조건을 참고하여 각 팀의 멤버들 중에 순수 스파이가 아닌 사람이 있는지 확인하는 
    checkSpy 함수 완성

    1. 스파잇의 직원들은 모두 '스파이'로 불리고 이중 스파이는 '스파이와 비슷한 이름'
    2. checkSpy 함수의 첫번째 파라미터에는 하나의 팀을 표현하는 객체를 아규먼트로 받음
    3. checkSpy 함수는 내붑에서 some 혹은 every 메소드 활용
    4. checkSpy 함수는 최종적으로 message 변수에 담긴 값을 출력
    5. messge 변수를 선언하고, 각 팀의 멤버들을 확인한뒤 적절한 문구 담기
*/

const spait = [{
        codeName: 'ApplePie',
        members: ['스파이', '스파이', '스파이', '스파이', '스파이']
    },
    {
        codeName: 'BigBoss',
        members: ['스파이', '스파이', '스과이', '스파이', '스파이']
    },
    {
        codeName: 'CEO',
        members: ['스파이', '스파이', '스파이', '습하이', '스파이']
    },
    {
        codeName: 'DeathNote',
        members: ['스파이', '스파이', '스파이', '스파이', '스파이']
    },
    {
        codeName: 'EarlyBird',
        members: ['스파이', '스마이', '스파이', '스파이', '스파이']
    },
    {
        codeName: 'Faker',
        members: ['스파이', '스파이', '스파이', '스파이', '스파이']
    },
];

function checkSpy(team) {
    // 여기에 코드를 작성해 주세요.

    const { codeName, members } = team;
    const result = members.some((member) => member !== '스파이');
    const message = result  
        ? `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다!`
        : `팀 ${codeName} 에는 이중 스파이가 없습니다.`;

    // const isNotSpy = team.members.every((ele) => ele === '스파이');

    // const message = isNotSpy ?
    //     `팀 ${team.codeName} 에는 이중 스파이가 없습니다.` :
    //     `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`;

    console.log(message);
}

// 테스트 코드
spait.forEach((team) => checkSpy(team));