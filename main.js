function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}
let numAleatorio = numeroAleatorio(1, 100);
let tentativas = 0;

function jogo() {
    let inputPalpite = document.getElementById('inputPalpite');
    let palpite = parseInt(inputPalpite.value);

    if (isNaN(palpite)) {
        document.getElementById("texto").innerHTML = 'Digite um valor válido!';
        inputPalpite.value = '';
        return;
    }

    tentativas++

    if (palpite < numAleatorio) {
        document.getElementById("texto").innerHTML = "Baixo demais. Tente um número mais alto!";
        inputPalpite.value = '';
    } else if (palpite == numAleatorio) {
        document.getElementById("texto").innerHTML = `Parabéns! Você acertou com ${tentativas} tentativas!`;
        inputPalpite.value = '';
        return;
    } else {
        document.getElementById("texto").innerHTML = "Alto demais. Tente um número mais baixo!";
        inputPalpite.value = '';
    }

    if (tentativas > 8) {
        inputPalpite.value = '';
        document.getElementById("texto").innerHTML = `Suas tentativas acabaram. O número era ${numAleatorio}.`;
    }
}

document.getElementById('btnEnviar').addEventListener('click', jogo);