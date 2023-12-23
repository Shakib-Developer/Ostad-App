const printName = function (v1, v2, v3) {
    console.log(`${this.name} has 3 virtues: ${v1}, ${v2}, ${v3}`);
};

const sumit = {
    name: "Sumit",
    age: 38,
};

const v1 = "playing cricket";
const v2 = "content creator";
const v3 = "father";
const virtues = [v1, v2, v3];

printName.call(sumit, virtues);
// printName.apply(sumit, virtues);

// const bindFunction = printName.bind(sumit, v1, v2, v3);

// bindFunction();
