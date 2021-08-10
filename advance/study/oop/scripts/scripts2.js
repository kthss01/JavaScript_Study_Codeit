// const user1 = {
//     email : 'chris123@google.com', // 프로퍼티 (property)
//     birthdate : '1992-03-21',
//     buy(item) { // 메소드 (method)
//         console.log(`${this.email} buys ${item.name}`); 
//     }
// }; 

// const user2 = {
//     email : 'chris123@google.com', // 프로퍼티 (property)
//     birthdate : '1992-03-21',
//     buy(item) { // 메소드 (method)
//         console.log(`${this.email} buys ${item.name}`); 
//     }
// }; 

// 이런식으로 작성하면 유저가 많아지면 문제가 생김
// 해결방법 : Factory Function - 객체를 생성해서 리턴해주는 함수

function createUser(email, birthdate) {
    const user = {
        // email : email,
        // birthdate : birthdate,
        // 이렇게 모던 프로퍼티 표기법으로 작성할 수 있음
        email,
        birthdate,
        buy(item) {
            console.log(`${this.email} buys ${item.name}`);
        },
    };
    return user;
}

const item = {
    name: '스웨터',
    price : 30000,
};

const user1 = createUser('chris123@google.com', '1992-03-21');
const user2 = createUser('chris345@google.com', '1992-03-21');
const user3 = createUser('chris678@google.com', '1992-03-21');

function print() {
    console.log(user1.email);
    console.log(user2.email);
    console.log(user3.email);

    user1.buy(item);
    user2.buy(item);
    user3.buy(item);
}

export default print;