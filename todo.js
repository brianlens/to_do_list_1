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
  // Total number of completed todos
  var completedCount = document.getElementById('completed-count');
  var completedCount = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;
  // Total number of uncompleted todos
  var todoCount = document.getElementsById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;
}

updateCounters();
