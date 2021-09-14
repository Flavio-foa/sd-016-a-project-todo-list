const buttonCreatTarefa = document.querySelector('#criar-tarefa');
const listOrder = document.querySelector('#lista-tarefas')

buttonCreatTarefa.addEventListener('click', inputButton);

function inputButton () {
  const inputButton = document.querySelector('#texto-tarefa');
  const creatList = document.createElement('li');
  creatList.classList.add('color');
  const addText = inputButton.value;
  creatList.innerText = addText
  listOrder.appendChild(creatList);
  inputButton.value = "";
}
listOrder.addEventListener('click', selectBackgroundColor); 

function selectBackgroundColor (event) {
  const selectLi = document.querySelectorAll('li');
    for (let index = 0; index < selectLi.length; index += 1) {
      selectLi[index].style.backgroundColor = 'white';
    }  
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

