const arrayToList = (array) => {
  let result = null;
  for (let i = array.length - 1; i >= 0; i--) {
    result = { value: array[i], rest: result };
  }
  return result;
};


const listToArray = (list) => {
  let result = [];
  let node = list;

  while (node !== null) {
    result.push(node.value);
    node = node.rest;
  }

  return result;
};

const prepend = (value, list) => ({ value, rest: list });
const nth = (list, n) => {
  let i = 0;
  let node = list;

  while (node !== null) {
    if (i === n) return node.value;
    node = node.rest;
    i++;
  }

  return undefined;
};
const recursiveNth = (list, n) => {
  if (list === null) return undefined;
  if (n === 0) return list.value;
  return nth(list.rest, n - 1);
};


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(recursiveNth(arrayToList([10, 20, 30]), 1));
// → 20