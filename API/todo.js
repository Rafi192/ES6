const loadTodo =() => {
    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then(response => {
        return response.json()})
    .then(data => display(data.slice(0,4)));
};


const display= (todos) =>{
// console.log(todos);
const todoContainer = document.getElementById("todo-container");
todoContainer.innerHTML = " ";



todos.forEach(todo => {
    // console.log(todo)
    const todoCard = document.createElement('div')
    todoCard.innerHTML =`
     <div class="todo-card">
        <p>${todo.completed == true ?`<i class="fa-solid fa-square-check"></i>`: `<i class="fa-regular fa-rectangle-xmark"></i>`} </p>
        <h2>${todo.title}</h2>
      </div>
    </div>

    `
    todoContainer.appendChild(todoCard)
    
});
};



loadTodo()