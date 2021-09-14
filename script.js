// Requisitos 5, 6 e 7
let button = document.getElementById('criar-tarefa');
button.addEventListener('click', adicionaTexto)

function adicionaTexto() {
    let input = document.getElementById('texto-tarefa');
    let lista = document.getElementById('lista-tarefas');
    let newList = document.createElement('li');
    newList.className = 'item-da-lista';
    newList.addEventListener('click', colorirItem);
    newList.addEventListener('dblclick', riscaItem);
    newList.addEventListener('dblclick', removeRisco);
    lista.appendChild(newList);
    newList.innerText = input.value;
    input.value = '';
}

function colorirItem(event) {
        event.target.style.background = 'rgb(128, 128, 128)';
}

// Requisito 8
function verificaSeSelecionado() {
    let itensDaLista = document.getElementById('lista-tarefas');
    itensDaLista.addEventListener('click', function(event){
        for (let i = 0; i < itensDaLista.children.length; i += 1){
            itensDaLista.children[i].style.background = 'white';
        }
        event.target.style.background = 'rgb(128, 128, 128)';
    })
    }
 verificaSeSelecionado();

 // Requisito 9
 function riscaItem() {
    let itemLista = document.getElementById('lista-tarefas');
    itemLista.addEventListener('dblclick', function(event){
       event.target.classList.add('completed');
     /*   removeRisco(); */
   })
}


function removeRisco() {

    let itemLista = document.getElementsByClassName('completed');
    for (let i = 0; i < itemLista.length; i += 1) {
    itemLista[i].addEventListener('dblclick', function(event){
        event.target.classList.remove('completed');
    })
}
}

 
// Requisito 10
function deleteList() {
    let buttonDelete = document.getElementById('apaga-tudo');
    buttonDelete.addEventListener('click', function() {
        let lista = document.querySelectorAll('li');
        for (let i = 0; i < lista.length; i += 1) {
            lista[i].remove();
        }
    });
}
deleteList();
 
// Requisito 11 - DÚVIDA
       function removeItensFinalizados() {
           let buttonRemoveFinalizados = document.getElementById('remover-finalizados');
           buttonRemoveFinalizados.addEventListener('click', function() {
               let completos = document.querySelectorAll('.completed');
               for (let i = 0; i < completos.length; i += 1) {
                completos[i].remove();
            }
           });
       }
removeItensFinalizados();

