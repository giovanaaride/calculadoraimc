let peso;
let altura;
let imc;
let resultado;

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    if (imc < 17) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc.toFixed(2) + '<br/> Cuidado! Você está muito abaixo do peso.'
    }

    else if (imc < 18.5) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc.toFixed(2) + '<br/> Cuidado! Você está abaixo do peso.'
    }

    else if (imc < 25) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc.toFixed(2) + '<br/> Tudo certo por aqui!'
    }

    else if (imc < 30) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc.toFixed(2) + '<br/> Cuidado! Você está acima do peso.'
    }

    else {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc.toFixed(2) + '<br/> Cuidado! Você está com obesidade.'
    }
}
