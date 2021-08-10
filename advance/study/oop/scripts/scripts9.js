// instanceof 연산자
// 부모 클래스
class  User {
    constructor(email, birthdate) {
        this.email = email;
        this.birthdate = birthdate;
    }

    buy(item) {
        console.log(`${this.email} buys ${item.name}`);
    }
}

// 자식클래스
class PremiumUser extends User { // extends 사용
    constructor(email, birthdate, level, point) {
        // 부모클래스의 생성자 함수 먼저 호출해줘야함 super 먼저 써야함
        super(email, birthdate); // super 부모 클래스의 생성자 함수를 의미
        this.level = level; // 프리미엄 회원 등급
        this.point = point;
    }

    // 오버라이딩 (overriding) - overide 덮어쓰다
    buy(item) {
        // console.log(`${this.email} buys ${item.name}`); // 유저 클래스 buy와 동일한 부분
        super.buy(item); // 이렇게 작성하면 됨 부모 클래스 메소드 호출
        this.point += item.price * 0.05;
    }

    streamMusicForFree() {
        console.log(`Free music streaming for ${this.email}`);
    }
}

const item = {
    name: '스웨터',
    price: 30000,
};

const user1 = new User('chris456@google', '1992-03-21');
const user2 = new User('chris789@google', '1992-03-21');
const user3 = new User('chris000@google', '1992-03-21');

const pUser1 = new PremiumUser('chris123@google.com', '1992-03-21', 3);
const pUser2 = new PremiumUser('chris1231234@google.com', '1992-03-21', 3);
const pUser3 = new PremiumUser('chris123435@google.com', '1992-03-21', 3);

function print() {
    const users = [user1, pUser1, user2, pUser2, user3, pUser3];

    users.forEach((user) => {
        // console.log(user instanceof PremiumUser);
        console.log(user instanceof User); // 부모 클래스로 만든 객체로도 인정됨
    });
}

export default print;