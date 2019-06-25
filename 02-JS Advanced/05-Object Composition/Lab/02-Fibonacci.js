function getFibonator() {
    let firstNumber = 0;
    let secondNumber = 1;

    return () => {
        let sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
        return firstNumber;
    };
};

let fib = getFibonator();

for (let i = 0; i < 10; i++) {
    console.log(fib());
}