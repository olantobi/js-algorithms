
function* generator(e) {
    yield e + 10;
    yield e + 25;
    yield e + 35;
}

function* randomize() {
    while(true) {
        let random = Math.floor(Math.random() * 1000);
        yield random;
    }
}

var generate = generator(27);

console.log(generate.next().value);

console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);

var random = randomize();
console.log(random.next().value);
console.log(random.next().value);
console.log(random.next().value);
console.log(random.next().value);
console.log(random.next().value);
console.log(random.next().value);
console.log(random.next().value);