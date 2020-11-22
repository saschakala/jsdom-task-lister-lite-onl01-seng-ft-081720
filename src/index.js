document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById('create-task-form');

  input.addEventListener('submit', function(event) {
  event.preventDefault();

  let taskElement=document.getElementById("new-task-description");
  let newTask = taskElement.value;
  console.log(newTask);
  
  let newItem = document.createElement('li');
  newItem.innerText = newTask;

  let list=document.getElementById("tasks");
  list.appendChild(newItem);
  taskElement.value = '';
  }
);
  // your code here
});

// .innerHTML += newTask;

// - set 'submit' to a variable
// - grab input and set to variable
// - add an eventlistener for 'submit' variable
// - stop from refreshing/sending to a new page
// - add input to array of to do list
// - add element to DOM