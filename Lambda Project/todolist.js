const todoList = [{
  name: 'finish project',
  dueDate: '2024-07-15'
}, {
  name: 'go outside',
  dueDate: '2024-07-15'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject) => {
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button> 
      `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });
document.querySelector('.js-name-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }

});
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  let name = inputElement.value;
  let dueDate;
  const dateInputElement = document.querySelector('.js-due-date-input');
  if (name === '') {
    name = 'empty';
  }
  if (dateInputElement.value === '') {
    dueDate = '2024-07-15';
  }
  else {
    dueDate = dateInputElement.value;
  }
  todoList.push({
    name: name,
    dueDate: dueDate,
    // name,
    // dueDate
  });

  inputElement.value = '';

  renderTodoList();
}