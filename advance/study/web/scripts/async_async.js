// async 함수 안의 async 함수
// async 함수 표현식으로 썼음
const applyPrivacyRule = async function (users) {
    // console.log(typeof users);
    // resultWithRuleApplied 객체인데 map 썼음 -> map filter 객체에도 적용가능 반환값은 배열임
    const resultWithRuleApplied = users.map((user) => {
        const keys = Object.keys(user);
        const userWithoutPrivateInfo = {};
        // console.log(typeof userWithoutPrivateInfo);
        keys.forEach((key) => {
            if (key !== 'address' && key !== 'phone') {
                userWithoutPrivateInfo[key] = user[key];
            }
        });
        // console.log(userWithoutPrivateInfo);
        return userWithoutPrivateInfo;
    });

    const p = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(resultWithRuleApplied); }, 2000);
    });

    return p;
};

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.text();
        const users = JSON.parse(result);
        // async 함수 안의 async 함수 사용
        const resultWithRuleApplied = await applyPrivacyRule(users);
        return resultWithRuleApplied;
    } catch (error) {
        console.log(error);
    } finally {
        console.log('exit')
    }
}

function compute() {
    getUsers().then((result) => { console.log(result); })
}

export default compute;