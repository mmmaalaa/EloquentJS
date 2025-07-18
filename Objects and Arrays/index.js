// let objectA = { a: 1, b: 2 };
// Object.assign(objectA, { z: 7, b: 3, c: 4, d: 5, A: 1, a: 41 });
// console.log(objectA);

let todoList = ["study", "exercise", "cook"];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
remember("read");
console.log(todoList);
// shift();
console.log(getTask());
console.log(todoList);
rememberUrgently("sleep");
console.log(todoList);