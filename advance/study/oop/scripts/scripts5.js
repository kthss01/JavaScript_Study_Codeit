// 캡슐화
class User {
    constructor(email, birthdate) {
        this.email = email + 1; // 여기서도 setter 먹힘 참고하자
        this.birthdate = birthdate;
    }

    // 메소드 constructor 바깥에 씀 주의
    buy(item) {
        console.log(`${this.email} buys ${item.name}`);
    }

    // 이렇게 작성하면 직접 프로퍼티 값 수정할 때마다 이 함수 실행됨
    // setter 메소드
    set email(address) {
        // 값에 대한 유효성 검사라고 함
        if (address.includes('@')) {
            this._email = address; // _email 새로운 프로퍼티 _ 숨기고 싶은 프로퍼티 _ 씀
        } else {
            throw new Error('invalid eamil address');
        }
    }

    // getter 메소드
    // 프로퍼티 값을 읽는 용도
    get email() {
        // return this._email;
        // 이렇게 문장을 리턴할 수도 있음
        return `Email Addres is ${this._email}`;
    }
}

const item = {
    name: '스웨터',
    price: 30000,
};

const user1 = new User('chris123@google.com', '1992-03-21');

// 캡슐화 심화
// 클로저(Closure) 개념 응용하여 완벽한 캡슐화 구현하기
function createUser(email, birthdate) {
    let _email = email; // user 객체 바깥에 _email 변수 존재

    const user = {
        birthdate,

        // user 객체 안에 _email 변수의 값을 읽고 쓸 수 있는 getter, setter 존재
        get email() {
            return _email;
        },

        set email(address) {
            if (address.includes('@')) {
                _email = address;
            } else {
                throw new Error('invalid email address');
            }
        },
    };

    return user;
}

// 메소드도 캡슐화 가능함
function createUser2(email, birthdate) {
    const _email = email;
    let _point = 0;

    function increasePoint() {
        _point += 1;
    }

    const user = {
        birthdate,

        get email() {
            return _email;
        },

        get point() {
            return _point;
        },

        buy(item) {
            console.log(`${this.email} buys ${item.name}`);
            increasePoint();
        },
    };

    return user;
}

// 모듈화 부분
// 사실 함수 밖에 있어도 import 할 때 실행되긴 함 순서 유지하려고 함수로 만든거
function print() {
    console.log(user1.email);

    // 이 때 setter 메소드 실행됨
    // user1.email = 'wrong code'; // 이런식으로 잘못 프로퍼티 수정을 해버릴 수 있음
    // 에러 발생
    user1.email = 'chris_robert@google.com'; // 이런식으로 잘못 프로퍼티 수정을 해버릴 수 있음

    // console.log(user1._email);

    // 이러면 getter 메소드가 실행됨
    console.log(user1.email);

    // 캡슐화 심화 
    const user2 = createUser('chris123@google.com', '19920321');
    console.log(user2.email);

    console.log(user2._email); // 이 경우 undefined임

    const user3 = createUser2('chris123@google.com', '19920321');
    user3.buy(item);
    user3.buy(item);
    user3.buy(item);
    console.log(user3.point);
    //   console.log(user3.increasePoint()); // error 발생
}

export default print;