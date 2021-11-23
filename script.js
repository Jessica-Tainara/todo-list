const caixa = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByTagName('li');
function CriaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.className = 'item';
  tarefa.innerText = caixa.value;
  lista.appendChild(tarefa);
  caixa.value = '';
}
function background(event) {
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = 'white';
    tarefas[i].removeAttribute('id');
    //  vi nesse link como remover id = https://stackoverflow.com/questions/54358737/add-and-remove-id-by-pure-javascript/54358814
  }
  const evento = event.target;
  evento.style.backgroundColor = 'rgb(128,128,128)';
  evento.id = 'selected';
}
function TarefaPronta(event) {
  const evento = event.target;
  if (event.target.className === 'item completed') {
    evento.className = '';
  } else {
    evento.className = 'item completed';
  }
}
botao.addEventListener('click', CriaTarefa);
lista.addEventListener('click', background);
lista.addEventListener('dblclick', TarefaPronta);
