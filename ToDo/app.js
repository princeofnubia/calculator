class Tasks {
    constructor() {
        this.tasksli = []
    }

    createnewtask(task) {
        this.tasksli.push(task);
    }

    removetask() {
        this.tasksli.splice(this.task.index, 1);
    }

    newtask(whattodo) {
        for (let i = 0; 1 < this.tasksli.length; i++) {
            this.tasksli[i].whattodo;
        }
    }
}

const task = (whattodo) => {
    let todolist= document.getElementById("tasks");
    let createTask = document.createElement('li');
    let create = todolist.appendChild(createTask);
    let input = document.createElement('input');
    create.appendChild('input');

}

documet.getElementById('click').addEventListener("click", )