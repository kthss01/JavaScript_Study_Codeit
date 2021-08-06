const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.
data.forEach( (ele, i) => {
    const li = document.createElement('li');
    // li.classList.add('item');
    // if (ele.isClear)
    //     li.classList.add('done');


    // ele.isClear 
    //     ? li.classList.add('item', 'done')
    //     : li.classList.add('item');
    li.classList.add('item', ele.isClear && 'done');

    li.textContent = `${i + 1}. ${ele.title}`;

    // append는 node 객체와 dom string 받을 수 있음, 여러개도 넣을 수 있음
    // return 문 x
    // list.append(li);

    // appendChild는 node 객체만 가능, 하나만 넣을 수 있음
    // return 문 있음
    list.appendChild(li);

});