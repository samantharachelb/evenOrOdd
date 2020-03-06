import check from "../../api/check";
const input = document.querySelector('textarea#number');
const output = document.querySelector('#out');

document.addEventListener(
    'DOMContentLoaded',
    () => check(input.placeholder),
    false
);

input.addEventListener('input', function() {
    if (this.value)
        checkNumber(this.value);
});

output.addEventListener('click', () => {
    window.getSelection().selectAllChildren(output);
});

function checkNumber(val) {
    check(val)
        .then(numberType => (output.innerText = numberType))
        .catch(e => console.log(e));
}