const btnCreateTask = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function markTaskItem(event) {
  const taskList = document.querySelectorAll('.listItem');
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].style.backgroundColor = '';
  }
  const backgroundColor = 'rgb(128, 128, 128)';
  const taskItem = event;
  taskItem.target.style.backgroundColor = backgroundColor;
}

function finishTaskItem(event) {
  const taskItem = event.target;
  if (taskItem.className.includes('completed')) {
    taskItem.classList.remove('completed');
  } else {
    taskItem.classList.add('completed');
  }
}

function createTask() {
  const listItem = document.createElement('li');
  listItem.classList.add('listItem');
  const contentInput = document.querySelector('#texto-tarefa').value;
  listItem.innerHTML = contentInput;
  listItem.addEventListener('click', markTaskItem);
  listItem.addEventListener('dblclick', finishTaskItem);
  document.querySelector('#texto-tarefa').value = '';
  console.log(`valor input = ${contentInput}`);
  list.appendChild(listItem);
}

btnCreateTask.addEventListener('click', createTask);
