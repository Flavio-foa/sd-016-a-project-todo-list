
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');
let taskList = []


function createTask(){

    for (task of taskList){
        let newTask = document.createElement('li');
        let textTask = document.createTextNode(task)
        newTask.appendChild(textTask);
        list.appendChild(newTask)

        taskList = []
    }
    
}

createTask()


function addTask(){
    let inputText = input.value
    taskList.push(inputText)
    input.value = ''

    createTask()
    removeAllTasks()
    addSelectMode()
}

button.addEventListener('click', addTask)
function addSelectMode(){
list.addEventListener('click', function (event){
    event.target.removeEventListener('click', event)
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'  
}, { once: true })
}


function addCompletedTasks(){
list.addEventListener('dblclick', function (event){
    event.target.classList.toggle('completed')
    removeFinished()
})
}
addCompletedTasks()



function addRemoverButton(){
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remover'
    removeButton.id = 'apaga-tudo'
    let sec1 = document.querySelector('#sec1');

    sec1.appendChild(removeButton)
}

addRemoverButton()


function removeAllTasks(){
    let tasks = document.querySelectorAll('#lista-tarefas li')
    let removeButton = document.querySelector('#apaga-tudo')
    removeButton.addEventListener('click', function(){
        for (let index = 0; index < tasks.length; index+=1){
            tasks[index].remove()
        }
    })
}



function createButtonFinished(){
    let button = document.createElement('button')
    button.innerHTML = 'Remover Finalizados'
    button.id = 'remover-finalizados'
    let sec1 = document.querySelector('#sec1')

    sec1.appendChild(button)
}
createButtonFinished()


function removeFinished(){
    let list = document.querySelector('#lista-tarefas')
    let button = document.querySelector('#remover-finalizados');
    let finished = document.querySelectorAll('.completed')
    button.addEventListener('click', function(){
        for (let index = 0; index < finished.length; index+=1){
            finished[index].remove()
        }
        
    })
}








