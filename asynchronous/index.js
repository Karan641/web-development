const numbers = [4,10,12,13];
const new_number = numbers.map(function (value){ // .map function is used to create a new array by applying a function to each element of the original array.
    return value * 10;
});
console.log(new_number);


const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 20 },
];

const userNames = users.map(function (user) {
  return user.name;
});
console.log(userNames);