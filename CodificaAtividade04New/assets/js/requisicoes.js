// Função para fazer uma requisição AJAX
function requestPage(url) {
    // Limpa o conteúdo atual
    document.getElementById('content').innerHTML = ''

    // Cria um novo objeto XMLHttpRequest
    let ajax = new XMLHttpRequest()

    // Configura a requisição com o método GET e a URL fornecida
    ajax.open('GET', url)

    // Mostra o estado atual da requisição no console
    console.log(ajax.readyState)

    // Define a função a ser chamada quando o estado da requisição mudar
    ajax.onreadystatechange = () => {
        // Verifica se a requisição foi concluída (readyState == 4) e se foi bem-sucedida (status == 200)
        if (ajax.readyState == 4 && ajax.status == 200) {
            // Define o conteúdo do elemento 'content' com a resposta da requisição
            document.getElementById('content').innerHTML = ajax.responseText
        }

        // Verifica se a requisição foi concluída (readyState == 4) e se ocorreu um erro (status == 404)
        if (ajax.readyState == 4 && ajax.status == 404) {
            // Define o conteúdo do elemento 'content' com a mensagem de erro
            document.getElementById('content').innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.'
        }
    }

    // Envia a requisição após um atraso de 3 segundos
    setTimeout(() => {
        ajax.send()
    },0)
}   