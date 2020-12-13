const todos = JSON.parse(localStorage.getItem('todos')) || []

const render = () => {
  const todoList = document.getElementById('todo-list')
  const todosTemplate = todos.map(t => '<li>' + t + '</li>');
  todoList.innerHTML = todosTemplate.join('');
  const elementos = document.querySelectorAll('#todo-list li')
  elementos.forEach((elemento,i) => {
   elemento.addEventListener('click',() =>{
     elemento.parentNode.removeChild(elemento)
     todos.splice(i, 1)
     actualizaTodos(todos)
     render()
   })
  }) 
}

const actualizaTodos = () => {
  const todoString =JSON.stringify(todos)
  localStorage.setItem('todos', todoString)
}

window.onload = () =>{
  render();
 const form = document.getElementById('todo-form');
 form.onsubmit = (e) => {
   e.preventDefault();
   const todo = document.getElementById('todo');
   const todoText = todo.value;
   todo.value = '';
   todos.push(todoText);
   actualizaTodos(todos)
   render()
 }
}
