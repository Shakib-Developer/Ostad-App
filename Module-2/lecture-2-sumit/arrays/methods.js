const numbers = [1, 2, 3, 4, 5, 6];

// #1 - array.concat
// const moreNumbers = [7, 8, 9, 10];
// console.log(numbers.concat(moreNumbers));

// a) do not change original arrays
// b) can take any number of array arguments - array1.concat(array2, array3);
// c) can take strings arguments - array1.concat("Sumit");

// #2 Array.from
// const string = "Learn with Sumit";
// console.log(Array.from(string));

// #3 array.filter
// const even = numbers.filter((number) => number % 2 === 0);
// console.log(even);
// a) do not change original arrays

// #4 array.find
// const firstEven = numbers.find((number) => number % 2 === 0);
// console.log(firstEven);
// a) do not change original arrays

// #5 array.findIndex
// const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);
// console.log(firstEvenIndex);
// a) do not change original arrays
// b)  returns -1 if no match is found

// #6 array.forEach
// const twice = numbers.forEach((number) => {
//     console.log(number);
// });

// #7 array.includes
// console.log(numbers.includes(4));
// console.log(numbers.includes(4, 3)); // start the search at position 3
// a) method is case sensitive

// #8 array.indexOf
// console.log(numbers.indexOf(5));

// #9 array.push
// const result = numbers.push(7);
// numbers.push(8, 9);
// console.log(numbers);
// console.log(result);
// a) changes the original array
// b) returns the new array length

// #10 array.pop
// numbers.pop();
// console.log(numbers);
// a) changes the original array
// b) returns the element it removed

// #11 array.reverse
// numbers.reverse();
// console.log(numbers);
// a) returns the reversed array

// #12 array.slice()
// console.log(numbers.slice(1, 3));
// console.log(numbers.slice(-3, -1));
// a) do not change original array

// #13 array.splice()
// numbers.splice(2, 0, 100, 200);
// numbers.splice(2, 2, 100, 200);
// console.log(numbers);
// a) changes original array
