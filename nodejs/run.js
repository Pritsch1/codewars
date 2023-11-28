/* ---code--- */
const stringToNumber = function (str) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let i, k, num, power_of_10;
    i = k = num = 0;
    power_of_10 = 1;

    for (i = str.length - 1; i > -1; i--) {
        for (k = 0; k < 10; k++) {
            if (str[i] == numbers[k]) {
                num += (numbers[k] * power_of_10);
                power_of_10 *= 10;
            }
        }
    }
    if (str[0] === "-") { num *= -1; }

    return num;
}
/* ---test cases--- */
console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));