const isEven = require('is-even');

export default async function checkNum(number: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!number) {
            reject({
                status: 400,
                message: "no number was supplied"
            });
        }

        let state: string;
        if (isEven(number)) {
            state = "even";
        } else {
            state = "odd";
        }

        resolve(state);
    })
}
