// Constructor function 생성자 함수
// 함수 이름 첫글자 대문자임 구분됨
// 소문자로 써도 문제는 없는데 관습이니 잘 지키자
function User(email, birthdate) {
    // this 생성된 해당 객체를 의미
    this.email = email;
    this.birthdate = birthdate;
    this.buy = function (item) {
        console.log(`${this.email} buys ${item.name}`);
    }
}

const item = {
    name: '스웨터',
    price: 30000,
};

// new 키워드 써야함
const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('chris456@google.com', '1992-03-21');
const user3 = new User('chris789@google.com', '1992-03-21');

function print() {
    console.log(user1.email);
    console.log(user2.email);
    console.log(user3.email);

    console.log(user1.birthdate);
    user1.buy(item);
}

export default print;