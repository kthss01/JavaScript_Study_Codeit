const input = document.querySelector('#input');

function checker() {
    const words = document.querySelectorAll('.word');
    if (words.length === 0) {
        alert('Success!๐');
        if (confirm('retry?')) {
            window.location.reload();
        }
    }
}

// ์ฌ๊ธฐ์ ์ฝ๋๋ฅผ ์์ฑํด ์ฃผ์ธ์.

function removeWord() {
    const word = document.querySelector(`[data-word="${input.value}"]`);
    // ์คํ ๋ฑ์ผ๋ก word๊ฐ ์์ผ๋ฉด null์ด ๋์
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