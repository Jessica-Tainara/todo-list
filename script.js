const caixa = document.getElementById('texto-tarefa');
const cria = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByTagName('li');
const apaga = document.getElementById('apaga-tudo');
function CriaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.className = 'item';
  tarefa.innerText = caixa.value;
  lista.appendChild(tarefa);
  caixa.value = '';
}
function TarefaSelecionada(event) {
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
  if (evento.className === 'item completed') {
    evento.className = 'item';
  } else {
    evento.className = 'item completed';
  }
}
function ApagaTudo() {
  const itens = document.getElementsByClassName('item');
  for (let i = itens.length - 1; i >= 0; i -= 1) {
    const itemunico = document.querySelector('.item');
    lista.removeChild(itemunico);
  }
}
apaga.addEventListener('click', ApagaTudo);
cria.addEventListener('click', CriaTarefa);
lista.addEventListener('click', TarefaSelecionada);
lista.addEventListener('dblclick', TarefaPronta);
