// Date 객체
// JavaScript에서는 날짜는 모두 ‘Date’라는 객체로 다룸

// Date
let myDate = new Date();

console.log(myDate); // 이 객체를 생성한 순간의 시간 출력
// 오늘 2017.5.18 이라면
// Thu May 18 2017 00:00:00 GMT+0900 (대한민국 표준시)

// new Date(특정한 값); // 원하는 날짜도 생성 가능

// new Date(milliseconds)
let myDate = new Date(1000);
// UTC 기준 1970년 1월 1일 0시 0분 0초에서
// 넣어준 숫자 값의 밀리초만큼 지난 객체가 만들어짐

// 숫자값 말고 문자열을 넣어 주는 방식도 있음
// new Date('YYYY-MM-DD')
let myDate = new Date('2017-05-18');

// new Date('YYYY-MM-DDThh:mm:ss') 24시간 표기 형태로 시간대를 작성
let myDate2 = new Date('2017-05-18T19:11:16');

console.log(myDate1); // 시간을 따로 정해주지 않으면 자정을 기준으로 생성 00:00:00
console.log(myDate2);

// 여러 개의 값을 전달해주는 방식
// new Date(YYYY, MM, DD, hh, mm, ss, ms) 연도, 월, 일, 시, 분, 초, 밀리초
// 연도, 월까지는 필수 나머진 생략 가능
// 생략할 경우에는 '1일 0시 0분 0초 0밀리초'로 처리

// 주의사항
// month는 0부터 시작 5월이면 4
let myDate3 = new Date(2017, 4); // 2017년 5월 1일 0시 0분 0초 0밀리초

// 이렇게 생성한 객체는
// 다양한 메소드로 가져올 수 있음

// Date.getTime()
let myDate = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate.getTime());
// myDate 객체가 1970년 1월 1일 00:00:00 UTC부터 몇 밀리초 지났는지 반환
// 이 정수값을 타임스탬프(time stamp)라고 부름

// 활용 방법
let myDate = new Date(2023, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = myDate.getTime() - today.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');

console.log(myDate.getFullYear()); // 2023
console.log(myDate.getMonth()); // 4, 5월 의미
console.log(myDate.getDate()); // 18 일자 의미
console.log(myDate.getDay()); // 4 요일 (일요일부터 0 ~ 6)
console.log(myDate.getHours()); // 19
console.log(myDate.getMinutes()); // 11
console.log(myDate.getSeconds()); // 16
console.log(myDate.getMilliseconds()); // 0

// 간단하게 시간 정보 알아내기
let myDate = new Date();

console.log(myDate.toLocalDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. . 일 시:분:초)

// Date 객체엔 자동으로 날짜를 수정해주는 유용한 기능이 있음
// 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해줌
let myDate = new Date(1988, 0, 32);
// 2월 1일로 자동고침 됨
console.log(myDate); // Mon Feb 01 1988 00:00:00

// Date.now() 이 메소드가 호출된 시점의 타임스탬프 반환, 새로 객체를 만들지 않아도 됨
let myDate = new Date();

console.log(Date.now() === myDate.getTime()); // true

// Date객체의 형변환
let myDate = new Date(2017, 4, 18);

console.log(typeof myDate); // object
console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate)); // 1495033200000
console.log(Boolean(myDate)); // true

console.log(myDate.getTime() === Number(myDate)); // true

// Date 객체끼리 사칙 연산도 충분히 가능
let myDate2 = new Date(2017, 4, 19);

let timeDiff = myDate2 - myDate1;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60); // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60); // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24); // 1 (date)

// 날짜를 표현하는 문자열
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');
// 하지만 이런 방식을 사용하다보면 브라우저나, 컴퓨터를 사용하는 위치의 시간대에 따라
// 서로 다른 결과 값이 나올 수도 있기 때문에 적어도 IETF 호환 RFC 2822 타임스탬프와
// ISO8601의 한 버전의 형식을 준수하는 문자열로 Date객체를 생성하는 것을 권장한다고 함
