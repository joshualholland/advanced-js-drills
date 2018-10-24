// name = 'Josh'
// var name;
// console.log(name);
setName();

function setName() {
    var name = 'Josh'
    console.log(name)
}

console.log('test');
let avg = findAvg(2, 2);
console.log('after let', avg);
function findAvg(a, b) {
    console.log('working?');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['bananas', 'strawberries', 'apples'];
let leastFav = ['apples']
function printFruits() {
    let favFruit = fruits[1];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
        console.log(leastFav);
    }
    printFavFruit();
}
printFruits();
helloJosh();
function helloJosh() {
    console.log('Hello')
    console.log('Josh')
}
sayWassup();
function sayWassup() {
    alert('Wassup')
}