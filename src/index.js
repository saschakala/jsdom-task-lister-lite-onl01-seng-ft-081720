document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById('create-task-form');

  input.addEventListener('submit', function(event) {
    event.preventDefault();

    let taskElement=document.getElementById("new-task-description");
    let newTask = taskElement.value;
    // console.log(newTask);
  
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


// - set form to a variable
// - add an eventlistener for 'submit' action on form
// - stop from refreshing/sending to a new page with .preventDefault
// - set input element to a variable
// - set the value of the input element to a variable
// - create a new li
// - add input value to the new li
// - set list to a variable
// - append new li to list
// - reset input element to empty