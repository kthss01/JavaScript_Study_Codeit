// 상속
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

// class PremiumUser {
//     constructor(email, birthdate, level) {
//         this.email = email;
//         this.birthdate = birthdate;
//         this.level = level; // 프리미엄 회원 등급
//     }

//     buy(item) {
//         console.log(`${this.email} buys ${item.name}`);
//     }

//     streamMusicForFree() {
//         console.log(`Free music streaming for ${this.email}`);
//     }
// }

// 자식클래스
class PremiumUser extends User { // extends 사용
    constructor(email, birthdate, level) {
        // 부모클래스의 생성자 함수 먼저 호출해줘야함 super 먼저 써야함
        super(email, birthdate); // super 부모 클래스의 생성자 함수를 의미
        this.level = level; // 프리미엄 회원 등급
    }

    streamMusicForFree() {
        console.log(`Free music streaming for ${this.email}`);
    }
}

const item = {
    name: '스웨터',
    price: 30000,
};

const pUser1 = new PremiumUser('chris123@google.com', '1992-03-21', 3);

function print() {
    console.log(pUser1.email);
    console.log(pUser1.birthdate);
    console.log(pUser1.level);
    pUser1.buy(item);
    pUser1.streamMusicForFree();
}

export default print;