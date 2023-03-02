const array = [10, 20, 30, 40, 50];

function multiplicaPorDez(num) {
    return num * 10;
}

const arrayMultiplicadaPorDez = array.map(multiplicaPorDez);
const arrayMultiplicadaPorDezArrow = array.map(num => num * 10);

console.log(arrayMultiplicadaPorDez);
console.log(arrayMultiplicadaPorDezArrow);