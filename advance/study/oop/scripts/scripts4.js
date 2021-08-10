// function User(email, birthdate) {
//     this.email = email;
//     this.birthdate = birthdate;
//     this.buy = function (item) {
//         console.log(`${this.email} buys ${item.name}`);
//     }
// }

// Class es2015에서 나옴
class  User {
    // 생성자 메소드, 객체가 생성될 때 실행
    constructor(email, birthdate) {
        // this 생성되는 객체를 나타냄
        this.email = email;
        this.birthdate = birthdate;
    }

    // 메소드 constructor 바깥에 씀 주의
    buy(item) {
        console.log(`${this.email} buys ${item.name}`);
    }
}

const item = {
    name: '스웨터',
    price: 30000,
};

// 똑같이 new 씀
const user1 = new User('chris123@google.com', '1992-03-21');
const user2 = new User('chris456@google.com', '1992-03-21');

function print() {
    console.log(user1.email);

    console.log(user1.birthdate);
    user1.buy(item);

    console.log(user2.email);

    console.log(user2.birthdate);
    user2.buy(item);
}

export default print;