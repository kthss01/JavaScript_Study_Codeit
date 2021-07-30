const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
}

send.addEventListener('click', sendMyText);

// 여기에 코드를 작성해 주세요.
input.addEventListener("keypress", function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        sendMyText();

        // enter 키 버튼을 누르면 줄바꿈이 되는데 이건 브라우저 기본동작
        // 기본 동작을 막아주는게 이 메소드
        e.preventDefault();
    }
});