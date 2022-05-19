let inputTask = document.getElementById('inputTask');
let taskBtn = document.getElementById('taskBtn');
let noTask = document.getElementById('noTask');
let allTasks = document.getElementById('allTasks');
let invalidMessage = document.getElementById('invalidMessage');

let AddTask = () => {
    if (inputTask.value.trim() == "") {
        addInvalidMessage();
        invalidMessage.innerHTML = ` You must enter data. 
        <i class=" bi bi-x-circle-fill" onclick="hideInvalidMessage()"></i>`
    }
    else if (inputTask.value.length < 3) {
        addInvalidMessage();
        invalidMessage.innerHTML = `You must enter data greater than 2.
        <i class=" bi bi-x-circle-fill" onclick="hideInvalidMessage()"></i>`
    }
    else {
        hideInvalidMessage();
        noTask.classList.add('none');
        allTasks.classList.remove('none');
        allTasks.innerHTML += `
            <div class="addedTask alert alert-info">
                ${inputTask.value}
                <i class=" bi bi-x-circle-fill" onclick="removeTask()"></i>
            </div>`
    }

    inputTask.value = "";
    inputTask.focus();
}
taskBtn.addEventListener('click', AddTask);

let removeTask = () => {
    event.target.parentElement.remove();

    if (allTasks.childElementCount == 0) {
        noTask.classList.remove('none');
        allTasks.classList.add('none');
    }
}

let addInvalidMessage = () => {
    invalidMessage.classList.remove('none');
}

let hideInvalidMessage = () => {
    invalidMessage.classList.add('none');
    inputTask.focus();
}