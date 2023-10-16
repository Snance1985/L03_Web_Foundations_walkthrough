
let taskList = [];

function renderList() {
    document.getElementById('listTasks').innerHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        let newParagraph = document.createElement('p');
        newParagraph.innerHTML = taskList[i];
        document.getElementById('listTasks').appendChild(newParagraph);
    }
}

function removeTask() {
    if (taskList.length === 0) {
        alert('No tasks to remove')
    } else {
        taskList.pop();
        renderList();
    }
}

function addNewTask() {
    let newTask = document.getElementById('newTask').value;
    taskList.push(newTask);
    renderList();
}

