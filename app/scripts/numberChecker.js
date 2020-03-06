import check from "../../api/check";
const input = document.querySelector('textarea#number');
const output = document.querySelector('#out');

document.addEventListener(
    'DOMContentLoaded',
    () => numberType(input.placeholder),
    false
);

input.addEventListener('input', function() {
    if (this.value)
        number(this.value);
});

output.addEventListener('click', () => {
    window.getSelection().selectAllChildren(output);
});

function numberType(val) {
    check(val)
        .then(tears => (output.innerText = numberType))
        .catch(e => console.log(e));
}