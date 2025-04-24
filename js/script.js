// Declara um array vazio chamado lista_objetos para armazenar objetos (tarefas e o nível de prioridade da tarefa)
var lista_objetos = [];

// A função adicionarTarefa() adiciona uma nova tarefa à lista, ordena por prioridade e atualiza o HTML
function adicionarTarefa(){

    // tarefas: Pega o valor digitado no input com ID adicionar_tarefas (texto da tarefa)
    // prioridade: Pega o valor selecionado no input com ID prioridade (nível de prioridade)
    // lista: Referência ao elemento HTML ( uma <ul> ) onde as tarefas serão exibidas
    let tarefas = document.getElementById("adicionar_tarefas").value;
    let prioridade = document.getElementById("prioridade").value;
    var lista = document.getElementById("lista");


    //Adiciona no Array a tarefa e o nível de prioridade
    lista_objetos.push({tarefa: tarefas, prioridade: prioridade})

    //Reordena as tarefas pelo nível de prioridade, sendo 1 ou mais alto e 3 o nívem mais baixo 
    lista_objetos.sort((a, b) => a.prioridade - b.prioridade);

    //Cria um map para transformar os objetos dentro da lista em string e depois concatena todas as strings do array em uma única string
    listaHTML = lista_objetos.map(item =>
        `<li class="item prioridade-${item.prioridade}" onclick="adicionarCheck(this)">${item.tarefa}</li>\n`
    ).join("");

    //Substitui o conteúdo HTML do elemento lista pelo novo HTML gerado
    lista.innerHTML = listaHTML;
}

//Alternar a classe Check no elemento clicado (marcar/desmarcar visualmente)
function adicionarCheck(elemento){

    //Se o elemento já tem a classe Check, remove-a (tarefa "desmarcada")
    if (elemento.classList.contains("Check")) {
   
        elemento.classList.remove("Check");
      } 
      //Caso contrário, adiciona a classe Check (tarefa "marcada")
      else{
        elemento.classList.add("Check");
      }

}