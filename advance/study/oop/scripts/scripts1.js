// 객체 만들기 1-1 : Object-Literal
const user = {
    email : 'chris123@google.com', // 프로퍼티 (property)
    birthdate : '1992-03-21',
    buy(item) { // 메소드 (method)
        console.log(`${this.email} buys ${item.name}`); 
    }
}; // Object Literal : 객체를 나타내는 문자열 
// 위와 같이 작성한게 Object Literal이란 의미

const item = {
    name : '스웨터',
    price : 30000,
};

function print() {
    console.log(user.email);
    console.log(user.birthdate);
    user.buy(item);
}

// export { print };
export default print;