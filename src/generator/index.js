function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield "perro";
}

const g =gen();
console.log(g.next());
console.log(g.next().value);
console.log(g.next());
console.log(g.next().done);
console.log(g.next());


const array=["Pedro", "Juan", "Miguel", "felipe", "Pedrito",];

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}
const i=iterate(array);
let out=false;
do {
    let {value, done}=i.next();
    out=done;
    console.log(value);
} while (!out);