var numbers = [ 10, 20, 30];

function myFunction(total, value) {
   return total + value;
}

var sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;


const number = [10, 20, 30];

let equal = 0;

for (let i = 0; i < number.length; i++){
    equal += number[i];
}

document.write("Another Type Equalation: " + equal);
// document.getElementById("demo2").innerHTML = "The sum is " + sum;

console.log(equal);