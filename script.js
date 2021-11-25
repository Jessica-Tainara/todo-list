const caixa = document.getElementById('texto-tarefa');
const cria = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByTagName('li');
const apaga = document.getElementById('apaga-tudo');
const apagafinalizados = document.getElementById('remover-finalizados');
const apagaselecionados = document.getElementById('remover-selecionado');
const cima = document.getElementById('mover-cima');
const baixo = document.getElementById('mover-baixo');
const salva = document.getElementById('salvar-tarefas');
function carregasalvos() {
  for (let i = 0; i < localStorage.itens.split(',').length; i += 1) {
    const itemcriado = document.createElement('li');
    itemcriado.innerHTML = localStorage.itens.split(',')[i];
    itemcriado.className = localStorage.classes.split(',')[i];
    lista.appendChild(itemcriado);
  }
}
window.onload = function segundavez() {
  if (localStorage.itens) {
    carregasalvos();
  }
};
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
function ApagaFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  for (let i = finalizados.length - 1; i >= 0; i -= 1) {
    const finalizadounico = document.querySelector('.completed');
    lista.removeChild(finalizadounico);
  }
}
function ApagaSelecionados() {
  const itens = document.getElementsByClassName('item');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].id === 'selected') {
      lista.removeChild(itens[i]);
    }
  }
}
function Salva() {
  localStorage.removeItem('classes');
  localStorage.removeItem('itens');
  const textos = [];
  const classes = [];
  const itens = document.getElementsByClassName('item');
  for (let i = 0; i < itens.length; i += 1) {
    textos.push(itens[i].innerHTML);
    classes.push(itens[i].className);
  }
  localStorage.setItem('itens', textos);
  localStorage.setItem('classes', classes);
}
function MoveCima() {
  const itens = document.getElementsByClassName('item');
  for (let i = 0; i < itens.length; i += 1) {
    if (itens[i].id === 'selected' && i !== 0) {
      const auxiliar = itens[i].innerText;
      itens[i].innerText = itens[i - 1].innerText;
      itens[i - 1].innerText = auxiliar;
      const aux = itens[i].className;
      itens[i].className = itens[i - 1].className;
      itens[i - 1].className = aux;
      itens[i - 1].id = itens[i].id;
      itens[i].removeAttribute('id');
      const color = itens[i].style.backgroundColor;
      itens[i].style.backgroundColor = itens[i - 1].style.backgroundColor;
      itens[i - 1].style.backgroundColor = color;
    }
  }
}
function MoveBaixo() {
  const itens = document.getElementsByClassName('item');
  for (let i = itens.length - 1; i >= 0; i -= 1) {
    if (itens[i].id === 'selected' && i !== itens.length - 1) {
      const auxiliar = itens[i].innerText;
      itens[i].innerText = itens[i + 1].innerText;
      itens[i + 1].innerText = auxiliar;
      const aux = itens[i].className;
      itens[i].className = itens[i + 1].className;
      itens[i + 1].className = aux;
      itens[i + 1].id = itens[i].id;
      itens[i].removeAttribute('id');
      const color = itens[i].style.backgroundColor;
      itens[i].style.backgroundColor = itens[i + 1].style.backgroundColor;
      itens[i + 1].style.backgroundColor = color;
    }
  }
}
apaga.addEventListener('click', ApagaTudo);
cria.addEventListener('click', CriaTarefa);
lista.addEventListener('click', TarefaSelecionada);
lista.addEventListener('dblclick', TarefaPronta);
apagafinalizados.addEventListener('click', ApagaFinalizados);
apagaselecionados.addEventListener('click', ApagaSelecionados);
cima.addEventListener('click', MoveCima);
baixo.addEventListener('click', MoveBaixo);
salva.addEventListener('click', Salva);
