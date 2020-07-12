const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//alert ("Hi");

//curring

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyby5 = curriedMultiply(5);


//compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// 7;