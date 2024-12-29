function toggleMode() {
    document.body.classList.toggle('light-mode');
}

let add = document.getElementById("add");
add.addEventListener('click', addTodo);

function addTodo() {
    if (dueDate.value === '' || task.value === '') {
        return;
    } else {
        let task_item = document.createElement('div');
        task_item.classList = "task-item";

        let taskText = document.createElement('span');
        taskText.textContent = window.task.value;

        let dueDateText = document.createElement('div');
        dueDateText.textContent = window.dueDate.value;

        let editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.classList = 'edit-btn';
        editBtn.addEventListener('click', () => {
            let newTask = prompt("Edit task:", taskText.textContent);
            let newDueDate = prompt("Edit due date:", dueDateText.textContent);

            if (newTask !== null) {
                taskText.textContent = newTask;
            }
            if (newDueDate !== null) {
                dueDateText.textContent = newDueDate;
            }
        });

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = '-';
        removeBtn.addEventListener('click', () => {
            task_item.remove();
        });

        task_item.append(taskText);
        task_item.append(dueDateText);
        task_item.append(editBtn);
        task_item.append(removeBtn);
        list.append(task_item);

        window.task.value = '';
        window.dueDate.value = '';
    }
}