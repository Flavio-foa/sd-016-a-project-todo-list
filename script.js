const list = document.getElementById('lista-tarefas');

function clearInput() {
  const input = document.getElementById('texto-tarefa');
  input.value = '';
}

function addListItem() {
  const inputValue = document.getElementById('texto-tarefa').value;
  if (inputValue === '') alert('Não é possível adicionar tarefa sem nome');
  else {
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;

    list.appendChild(listItem);
    clearInput();
  }
}

function selectListItem(evt) {
  const listItems = document.querySelector('.selected');
  if (listItems) listItems.classList.remove('selected');

  const item = evt.target;
  item.classList.add('selected');
}

function completedItem(evt) {
  const item = evt.target;
  if (item.classList.contains('completed')) item.classList.remove('completed');
  else item.classList.add('completed');
}

function clearList() {
  list.innerText = '';
  localStorage.clear();
}

function clearCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    list.removeChild(completed[i]);
  }
}

function saveList() {
  const items = document.getElementsByTagName('li');
  for (let i = 0; i < items.length; i += 1) {
    let task = items[i].innerText;
    if (items[i].classList.contains('completed')) task += ',completed';
    localStorage.setItem(i, task);
  }
}

function loadList() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const listItem = document.createElement('li');
    const completed = ',completed';
    let task = localStorage[i];
    if (localStorage[i].includes(completed)) {
      task = task.replace(completed, '');
      listItem.className = 'completed';
    }
    listItem.innerText = task;

    list.appendChild(listItem);
  }
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  list.removeChild(selected);
}

function checkTaskPositionBottom(task) {
  const tasks = document.getElementsByTagName('li');
  if (tasks[tasks.length - 1].outerHTML === task) return false;
  return true;
}

function moveTaskUp() {
  const tasks = document.getElementsByTagName('li');

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('selected') && checkTaskPositionTop(tasks[i].outerHTML)) {
      const toUp = tasks[i].outerHTML;
      const toDown = tasks[i - 1].outerHTML;

      tasks[i].outerHTML = toDown;
      tasks[i - 1].outerHTML = toUp;
    }
  }
}

