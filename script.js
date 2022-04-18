const addBtn = document.getElementById('add');

function addTask(e){
    let inputTask = document.querySelector('input').value;
    
    
    let tasks = document.querySelector('.tasks');
    
    tasks.innerHTML += `<div onclick="markAsDone(this)" class="task">${inputTask} <button onclick="removeTask(this)" class="remove">X</button></div>`
}
function removeTask(e){
    e.closest('.task').remove()
}
function markAsDone(e){
    e.classList.toggle('done')

}
addBtn.addEventListener('click', addTask);

window.onkeydown = e =>{
    if(e.keyCode === 13){
        addTask()
    }
}