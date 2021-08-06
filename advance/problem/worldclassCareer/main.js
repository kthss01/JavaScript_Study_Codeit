/*
    세계적인 경력의 소유자

    reduce 메소드를 활용해서 일한 경력(개월 수)을 합산한 값을 totalCareer 변수에 담기
*/

const data = [{
        company: 'Naber',
        month: 3
    },
    {
        company: 'Amajohn',
        month: 12
    },
    {
        company: 'Coogle',
        month: 10
    },
    {
        company: 'Ittel',
        month: 6
    },
    {
        company: 'Sasung',
        month: 4
    },
    {
        company: 'CaCao',
        month: 3
    },
    {
        company: 'Microhard',
        month: 17
    },
];

// 여기에 코드를 작성해 주세요.
const totalCareer = data.reduce((acc, ele) => acc + ele.month, 0);

console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);