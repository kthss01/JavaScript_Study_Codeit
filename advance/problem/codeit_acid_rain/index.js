const input = document.querySelector('#input');

function checker() {
    const words = document.querySelectorAll('.word');
    if (words.length === 0) {
        alert('Success!👏');
        if (confirm('retry?')) {
            window.location.reload();
        }
    }
}

// 여기에 코드를 작성해 주세요.

function removeWord() {
    const word = document.querySelector(`[data-word="${input.value}"]`);
    // 오타 등으로 word가 없으면 null이 되서
    if (word) {
        word.remove();
        checker();
    }

    input.value = '';
}

input.addEventListener("change", removeWord);

// input.addEventListener("change", function (e) {
//     const words = document.querySelectorAll(".word");

//     const value = input.value;

//     // console.log(value);

//     for (const word of words) {
//         // console.log(word);
//         if (word.textContent === value) {
//             word.remove();
//             checker();
//         }
//     }

//     input.value = "";
// });