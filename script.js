let peso;
let altura;
let imc;
let resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc + '<br/> Cuidado! Você está muito abaixo do peso.'
    }
    
     else if(imc <= 18.5){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc + '<br/> Cuidado! Você está abaixo do peso.'
    }

    else if(imc <= 25){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc + '<br/> Tudo certo por aqui!'
    }

    else{
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi:' + imc + '<br/> Cuidado! Você está muito acima do peso.'
    }
}