const caixa = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
function CriaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.className = 'item';
  tarefa.innerText = caixa.value;
  lista.appendChild(tarefa);
  caixa.value = '';
}
botao.addEventListener('click', CriaTarefa);
