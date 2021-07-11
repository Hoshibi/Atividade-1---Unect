function abrirModal(){

    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function fecharModal(){

    const modal = document.getElementById('modal');

    window.onclick = (event) => {
        if(event.target == modal)
            modal.style.display='none';
    }

}