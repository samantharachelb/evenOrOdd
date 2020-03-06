var isEven = require('is-even');
var isOdd = require('is-odd');

export default number => {
    return new Promise((resolve, reject) => {
        if (!number) reject({status: 400, message: "no number was supplied"});

        resolve(check(number));
    });
};

function check(number) {
    var state;
    if (isEven(number) === true) {
        state = "even";
    } else if (isOdd(number) === true) {
        state = "odd";
    }

    return state;
}