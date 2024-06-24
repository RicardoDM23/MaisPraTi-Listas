const modal = document.querySelector("dialog")

function abrirDialog(){
    modal.showModal()
}

function fecharDiaglog(){
    modal.close()
}

function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}