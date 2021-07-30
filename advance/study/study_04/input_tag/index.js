/**
 * [input 태그 다루기]
 *  
 * > 포커스 이벤트
 * focusin: 요소에 포커스가 되었을 때
 * focusout: 요소에 포커스가 빠져나갈 때
 * focus: 요소에 포커스가 되었을 때 (버블링 x)
 * blur: 요소에 포커스가 빠져나갈 때 (버블링 x)
 * 
 * > 입력 이벤트
 * 
 * input: 사용자가 입력을 할 때
 * 참고 : 마찬가지로 입력될때마다 발생함
 * 
 * input은 키보드 이벤트와 비슷해보이지만
 * 말 그대로 어떤 값이 입력될 때 발생하기 때문에
 * esc나 시프트 같은 입력과 관련 없는 key에는 이벤트가 발생하지 않는 차이가 있음
 * 
 * 
 * change: 요소의 값이 변했을 때
 * 
 * 입력이 시작되기 전 값과
 * 완료되었을 때 값 사이에 차이가 있을때만 발생함
 * 일반적으로 focus를 빠져나갈 때 입력이 완료됐다고 판단해서
 * focuseout 직전에 발생함 (이전 값과 차이가 있어야 발생함)
 * focus를 잃지 않고도 enter 키를 눌러도 입력이 끝났다고 인식함
 * 
 */

 const el = document.querySelector('#form');

 function printEventType(e) {
   console.log('type:', e.type); // 이벤트 타입이 나옴
   console.log('target:', e.target);
   console.log('---------');
 }
 
 // focuis, blur로 해주었을 때
 // 버블링이 일어나지 않음 form의 위임시켰기 때문
 // #username에다 추가하면 해결되긴 함
 
 el.addEventListener('focusin', printEventType);
 el.addEventListener('focusout', printEventType);
 el.addEventListener('input', printEventType);
 el.addEventListener('change', printEventType);