class Tasks {
    constructor() {
        this.tasksli = []
    }

    createnewtask(task) {
        this.tasksli.push(task);
    }

    removetask() {
        this.tasksli.splice(this.tasksli.length, 1);
    }

    newtask() {
        for (let i = 0; 1 < this.tasksli.length; i++) {
            this.tasksli[i];


        }

    }
}




let listCreator = document.getElementById('newtask').addEventListener("click", function taskcreator(){
    let todolist = document.getElementById("tasksli");
    let createTask = document.createElement('li');
    let create = todolist.appendChild(createTask);
    let input = document.createElement('input');
    create.appendChild(input);
   
})

let tasks = new Tasks()

tasks.createnewtask(listCreator);
tasks.newtask();
function taskRemover () {
    document.getElementById("removetask").addEventListener("click",tasks.removetask());
}
taskRemover();
// document.getElementById('newtask').addEventListener("click", function taskcreator(){
//     let todolist = document.getElementById("tasksli");
//     let createTask = document.createElement('li');
//     let create = todolist.appendChild(createTask);
//     let input = document.createElement('input');
//     create.appendChild(input);
   
// })