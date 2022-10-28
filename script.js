function addNewTask() {
  const getInput = document.getElementById('texto-tarefa').value;
  const getOl = document.getElementById('lista-tarefas');
  const creatLi = document.createElement('li');
  creatLi.innerText = getInput;
  getOl.appendChild(creatLi);

  const addTask = document.getElementById('texto-tarefa');
  addTask.value = '';
}
const getBtn = document.getElementById('criar-tarefa');
getBtn.addEventListener('click', addNewTask);

function setTaskClass() {
  const selectedTask = document.getElementsByClassName('selected');
  const myTasks = document.querySelector('#lista-tarefas');

  myTasks.addEventListener('click', (event) => {
    if (selectedTask.length === 0) {
      event.target.classList.add('selected');
    } else {
      event.target.classList.remove('selected');
    }
  });
}
setTaskClass();

function completedClass() {
  const list = document.getElementById('lista-tarefas');
  const completedTask = document.getElementsByClassName('completed');
  list.addEventListener('dblclick', (event) => {
    if (
      completedTask.length !== 0
      && event.target.classList.contains('completed')
    ) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
completedClass();

const listLi = document.getElementById('lista-tarefas');
function clearList() {
  listLi.innerText = '';
}
const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearList);

function removeCompletos() {
  const lista = document.querySelectorAll('.completed');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].parentElement.removeChild(lista[i]);
  }
}
const clearCButton = document.getElementById('remover-finalizados');
clearCButton.addEventListener('click', removeCompletos);
