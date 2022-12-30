// console.log('it works')

let btn = document.querySelector('#btnFree');
let input = document.querySelector('#input');
let invalid = document.querySelector('#invalid');

btn.addEventListener('click', () => {
    event.preventDefault();
    if (input.value === '') {
        invalid.style.display = "block";
        console.log('false');
    } else {
        console.log('test');
    }
});