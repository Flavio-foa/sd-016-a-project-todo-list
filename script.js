const bodyContent = document.querySelector('body');
const headerTag = document.createElement('header');
bodyContent.appendChild(headerTag);

const h1Tag = document.createElement('h1');
bodyContent.children[1].appendChild(h1Tag);
h1Tag.innerText = 'Minha Lista de Tarefas!';

const sectionInsertion = document.createElement('section');
bodyContent.appendChild(sectionInsertion);

const paragraphTag = document.createElement('p');
bodyContent.children[2].appendChild(paragraphTag);
paragraphTag.id = 'funcionamento';
paragraphTag.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

const inputTag = document.createElement('input');
bodyContent.children[2].appendChild(inputTag);
inputTag.id = 'texto-tarefa';
inputTag.placeholder = 'Digite uma nova tarefa!';
inputTag.style.height = '20px';

const sectionList = document.createElement('section');
bodyContent.appendChild(sectionList);

const olTag = document.createElement('ol');
bodyContent.children[3].appendChild(olTag);
olTag.id = 'lista-tarefas';

const buttonTag = document.createElement('button');
bodyContent.children[2].appendChild(buttonTag);
buttonTag.id = 'criar-tarefa';
buttonTag.innerText = 'Adicionar nova tarefa';
buttonTag.style.marginLeft = '20px';

function selectedTask(event) {
  const eventTargetSelect = event.target;
  const checkStyle = document.querySelectorAll('li');
  for (let i = 0; i < checkStyle.length; i += 1) {
    checkStyle[i].style.backgroundColor = '';
  }
  eventTargetSelect.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addClickList() {
  const addClick = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < addClick.length; i += 1) {
    addClick[i].addEventListener('click', selectedTask);
  }
}

function createNewTask() {
  const newTask = inputTag.value;
  const createList = document.querySelector('#lista-tarefas');
  const liTag = document.createElement('li');
  createList.appendChild(liTag);
  liTag.innerText = newTask;
  inputTag.value = '';
  addClickList();
}
document.getElementById('criar-tarefa').onclick = function add() { createNewTask(); };
