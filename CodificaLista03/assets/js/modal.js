const modal = document.querySelector(".pqPythonDialog")

function abrirDialog(){
    modal.showModal()
}

function fecharDiaglog(){
    modal.close()
}

function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}