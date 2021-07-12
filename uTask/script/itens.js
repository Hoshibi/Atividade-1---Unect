
function add(){

    //Recebe valor do input
    const input = document.getElementById('input');
    const valorInput = input.value;

    ativToDo(valorInput);
}

/* Função add() - adicionar no card To Do -------------------------------------------*/
function ativToDo(entrada){

    input.value = ""; 
    
    //Criando conteúdo do card To Do

    /*  Formato do Card To Do:

    <div class="linha-item">
        <div class="nome-item">
            <p>Fazer Compras</p>
        </div>
        <div class="botão-item">
            <a><i class="fas fa-arrow-circle-right botao-proximo"></i></a>
            <a><i class="fas fa-minus-circle botao-menos"></i></a>
        </div> 
    </div>
    <hr class="hr2"/>
    */

    const lToDo = document.getElementById('linhas-todo');

    const div = document.createElement('div');
    div.className = "linha-item";
    lToDo.appendChild(div);

    const div1 = document.createElement('div');
    div1.className = "nome-item";
    div.appendChild(div1);
    
    const p = document.createElement('p'); 
    p.innerText = entrada;
    div1.appendChild(p);

    const div2 = document.createElement('div');
    div2.className = "botão-item";
    div.appendChild(div2);

    const a1 = document.createElement('a');
    div2.appendChild(a1);

    const i1 = document.createElement('i');
    i1.className = "fas fa-arrow-circle-right botao-proximo";
    a1.appendChild(i1);

    const a2 = document.createElement('a');
    div2.appendChild(a2);

    const i2 = document.createElement('i');
    i2.className = "fas fa-minus-circle botao-menos";
    a2.appendChild(i2);

    const hr = document.createElement('hr');
    hr.className = "hr2";
    lToDo.appendChild(hr);

    //Botão para enviar a atividade para Doing
    a1.addEventListener("click", () => {

        ativFazendo(entrada);
        div.remove();
        hr.remove();
        
    });

    //Deletar
    a2.addEventListener("click", () => { 
        div.remove();
        hr.remove();
    });
  
}


function ativFazendo(entrada){
    
    const lDoing = document.getElementById('linhas-doing');

    const div = document.createElement('div');
    div.className = "linha-item";
    lDoing.appendChild(div);

    const div1 = document.createElement('div');
    div1.className = "nome-item";
    div.appendChild(div1);
    
    const p = document.createElement('p'); 
    p.innerText = entrada;
    div1.appendChild(p);

    const div2 = document.createElement('div');
    div2.className = "botão-item";
    div.appendChild(div2);

    const a1 = document.createElement('a');
    div2.appendChild(a1);

    const i1 = document.createElement('i');
    i1.className = "fas fas fa-check-circle botao-ok";
    a1.appendChild(i1);

    const a2 = document.createElement('a');
    div2.appendChild(a2);

    const i2 = document.createElement('i');
    i2.className = "fas fa-minus-circle botao-menos";
    a2.appendChild(i2);

    const hr = document.createElement('hr');
    hr.className = "hr2";
    lDoing.appendChild(hr);

    //Botão para enviar a atividade para Doing
    a1.addEventListener("click", () => {

        ativFeito(entrada);
        div.remove();
        hr.remove();
        
    });

    //Deletar
    a2.addEventListener("click", () => { 
        div.remove();
        hr.remove();
    });
}


function ativFeito(entrada){
    
    const lDone = document.getElementById('linhas-done');

    const div = document.createElement('div');
    div.className = "linha-item";
    lDone.appendChild(div);

    const div1 = document.createElement('div');
    div1.className = "nome-item";
    div.appendChild(div1);
    
    const p = document.createElement('p'); 
    p.className = "riscado";
    p.innerText = entrada;
    div1.appendChild(p);

    const div2 = document.createElement('div');
    div2.className = "botão-item";
    div.appendChild(div2);

    const a1 = document.createElement('a');
    div2.appendChild(a1);

    const i1 = document.createElement('img');
    i1.className = "botao-retorno";
    i1.src = "./assents/icons8-restart.svg";
    a1.appendChild(i1);

    const a2 = document.createElement('a');
    div2.appendChild(a2);

    const i2 = document.createElement('i');
    i2.className = "fas fa-minus-circle botao-menos";
    a2.appendChild(i2);

    const hr = document.createElement('hr');
    hr.className = "hr2";
    lDone.appendChild(hr);

    //Botão para enviar a atividade para Doing
    a1.addEventListener("click", () => {

        ativToDo(entrada);
        div.remove();
        hr.remove();
        
    });

    //Deletar
    a2.addEventListener("click", () => { 
        div.remove();
        hr.remove();
    });
}
