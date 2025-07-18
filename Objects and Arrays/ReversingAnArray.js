const reverseArray = (array) => {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};


const reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
};

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(reverseArrayInPlace(myArray));
