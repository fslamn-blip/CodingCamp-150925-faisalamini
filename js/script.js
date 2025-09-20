let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    
    if (validateInput(todoInput.value, todoDate.value)) {
    
    const formTodo = {
        task: todoInput.value,
        date: todoDate.value, };
    todos.push(formTodo);
    
    displayTodos();
    todoInput.value = "";
    todoDate.value = "";
}

}

function displayTodos() {
    /// clear the existing list
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    todos.forEach((todo, _) => {
         todoList.innerHTML += `
        <li class="border-b border-gray-300 py-2>${todo.task} - <span
                    class="text-sm text-gray-500">${todo.date}</span></li>
        `;
    });
        
}

function deleteTodo() {}

function filterTodo() {}

function validateInput(todo, date) {
    if (todo === "" || date === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}