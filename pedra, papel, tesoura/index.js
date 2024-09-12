function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    let resultado = '';

    if ((escolhaUsuario === 'pedra' && escolhaComputador === 'papel') || 
        (escolhaUsuario === 'papel' && escolhaComputador === 'tesoura') || 
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'pedra')) {
        resultado = 'Você perdeu';

    } else if ((escolhaUsuario === 'pedra' && escolhaComputador === 'pedra') || (escolhaUsuario === 'papel' && escolhaComputador === 'papel') || (escolhaUsuario === 'tesoura' && escolhaComputador === 'tesoura')){
        resultado = 'Deu empate';

    } else  {
        resultado = 'Você ganhou';
    }

    document.getElementById('resultado').innerText = `Você escolheu ${escolhaUsuario}. O computador escolheu ${escolhaComputador}. ${resultado}`

    function exibirimagem (elementId, escolha) {
        const divimagens = document.getElementById(elementId);
        divimagens.innerHTML = `<img src="${escolha}.jpg" alt="${escolha}">`;
    }

    exibirimagem ('imagem1', escolhaUsuario)
    exibirimagem ('imagem2', escolhaComputador)
} 
