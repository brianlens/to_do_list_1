// select element containing the count
  var todoCounter = document.getElementById('todo-count');
// count the number of todo's by their class name
  var totalTodos = document.getElementsByClassName("todo").length;
// update the HTML inside the counter element
  todoCounter.innerHTML = totalTodos;

function updateCounters() {
  // Total number of todos
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;
}

updateCounters();
