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
  let selectedTask = document.getElementsByClassName('selected');
  let myTasks = document.querySelector('#lista-tarefas');

  myTasks.addEventListener('click', (event) => {
    if (selectedTask.length === 0) {
      event.target.className = 'selected';
    } else {
      event.target.className = 'selected';
    }
  });
}
setTaskClass();
