//1. PEGAR o botão que está no HTML

const botao = document.getElementById('botaoContador')

console.log(botao); // Vamos testar se pegamos o  botão

// 2. CRIAR uma variável para guardar o número de cliques
let contagem = 0;


botao.addEventListener('click', function() {
    console.log('Clicou no botão!')
    // Aumenta o contador em 1
    contagem ++
    
    // Atualiza o texto do botão

    botao.textContent = 'Cliques:' + contagem

    console.log('Contagem atual:', contagem)
})