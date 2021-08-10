class Math {
    // static 붙이면 객체 생성하지 않고 클래스로 접근 가능
    static PI = 3.14;

    static getCircleArea(radius) {
        return Math.PI * radius * radius;
    }
}

Math.PI = 3.141592;
Math.getRectangleArea = function (width, height) {
    return width * height;
}

function print() {
    console.log(Math.PI);
    console.log(Math.getCircleArea(5));
    console.log(Math.getRectangleArea(4, 5));

    // 내장 객체
    console.log(Date.now()); // 1970년 1월 1일부터 지금 이 시점까지 경과된 밀리초
}

export default print;