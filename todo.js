function updateCounters() {
    // Total number of todos
    var totalCount = document.getElementById('total-count');
    var totalTodos = document.getElementsByClassName("todo").length;
    totalCount.innerHTML = totalTodos;
    // Total number of completed todos
    var completedCount = document.getElementById('completed-count');
    var completedTodos = document.getElementsByClassName("completed").length;
    completedCount.innerHTML = completedTodos;
    // Total number of uncompleted todos
    var todoCount = document.getElementById('todo-count');
    var uncompletedTodos = totalTodos - completedTodos;
    todoCount.innerHTML = uncompletedTodos;
  }

updateCounters();


function toggleDone() {
    var checkbox = this;

    // check the checked status of the checkbox
    if (checkbox.checked) {
      // the "completed" class should be set on the parent element, <li>
      checkbox.parentElement.className = "todo completed";
    } else {
      checkbox.parentElement.className = "todo";
    }

updateCounters();
}

function submitTodo() {
    var inputField = document.getElementById("new-todo");
    var newTodoTitle = inputField.value;
    createTodo(newTodoTitle);
    // reset the value of the inputField to make it empty and
    // ready to create new todos
    inputField.value = null;

    updateCounters();
}


function createTodo(title) {
    //create list item
    var listItem = document.createElement("li");
    listItem.className = "todo";

    //create a checkbox + add it to <li>
    var checkbox = document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.id = "todo-" + nextTodoId();
    checkbox.value = "1";
    checkbox.checked = false;

    // assign toggleDone function on checkbox's onchange event
    checkbox.onchange = toggleDone.bind(checkbox);
    listItem.appendChild(checkbox);

    //create whitespace between cb and label
    space = document.createTextNode(" ");
    listItem.appendChild(space);

    //create a label that holds the title + add to <li>
    var label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.innerHTML = title;
    listItem.appendChild(label);

    //add <li> with the checkbox, the whitespace and label to list
    var list = document.getElementById("todolist");
    list.appendChild(listItem);

  updateCounters();
}

  // Every todo has it's own id so we can add that to the corresponding label's
  // "for" attribute to make sure that when we click the label, the checkbox
  // toggles
function nextTodoId() {
  return document.getElementsByClassName("todo").length + 1;
}
