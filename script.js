// Loop/Conditional Problems
let lunchArray = [
    "Burger",
    "Salad",
    "Lasagna",
    "Sushi",
    "Meatloaf"
]

function lunch(a) {
    let arr = ''
    for (let i = 0; i < a.length; i++) {
        if (arr.length < a[i].length) {
            arr = a[i]
        }
    }
    return arr
}

console.log(lunch(lunchArray))
console.log(lunchArray(lunchArray).length)

let lunchArray2 = ["Burger Salad Lasagna Sushi Meatloaf"]

function lunch2(a) {
    a.split(' ')
    let b = ''
    for (let i = 0; i < a.length; i++) {
        if (b.length < a[i].length) {
            b = a[i]
        }
    }
    return b.join(' ')
}

console.log(lunch2(lunchArray2))


function factorial(n) { // 1 * 2 * 3
}

function odd(a) {
    let result = a.filter((num, i) => i % 2 == 1).join(" ");
    console.log(result);
}

odd([1, 0, 1005, 42, 74, 83]);

function factorialize(num) {
    let value = 1;
    if (num == 1 || num === 0) {
        return value;
        console.log(value);
    } else {
        for (let i = 1; i < num; i++) {
            value *= i;
        }
        return num * value;
    }
}
factorialize(9);

let mpg = `500`;
if (mpg <= 10) {
    console.log(`it's palpable`);
} else if (mpg >= 11 && mpg <= 16) {
    console.log(`planet frowns upon this, so does wallet.`);
} else if (mpg >= 17 && mpg <= 20) {
    console.log(`It's palpable.`);
} else if (mpg >= 21 && mpg <= 29) {
    console.log(`atmosphere smiles at your decision.`);
} else if (mpg >= 30 && mpg <= 35) {
    console.log(`Not many gas stops will be taken.`);
} else if (mpg >= 35 && mpg <= 119) {
    console.log(`the fish of the sea smile at your conservation.`);
} else if (mpg == 120) {
    console.log(`if youre using the Tom Ogle fuel system, props`);
} else {
    console.log(`Too high`);
}