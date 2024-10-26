const arr = [1,2,4,"vaibhav",2];
console.log(arr.includes("vaibhav"));
arr.push(10);
arr.pop();
arr.unshift(29);
arr.shift();
console.log(arr);

//to convert string into the array
const new_Array = "vaibhav";
console.log(Array.from(new_Array));

//to create the array of the variables

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));