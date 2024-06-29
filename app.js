
let numeroSecreto;
let maximoNumeroSecreto;
let numeroDelUsuario;
let nroIntentos;
let listaNumerosSorteados = [];

function  asignarTextoElemento(etiqueta, texto){
    let elementoHtml = document.querySelector(etiqueta);
    elementoHtml.innerHTML = texto
}

function generarNumeroSecreto (maximo) {
    let numeroGenerado = Math.floor(Math.random()*maximo)+1;

    if(listaNumerosSorteados.length == maximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(maximo);
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
     }  
}



function condicionesIniciales(){
maximoNumeroSecreto = 10;
asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p',`Indica un número del 1 al ${maximoNumeroSecreto}`);

numeroSecreto = generarNumeroSecreto(maximoNumeroSecreto);
nroIntentos = 1;
console.log(listaNumerosSorteados);
}



function limpiarInput() {
    document.querySelector('#valorUsuario').value = "";
}

function vefificarIntento(){
    numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);    
    if(numeroDelUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el número en ${nroIntentos} ${nroIntentos === 1 ? 'intento': 'intentos' }`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            numeroDelUsuario > numeroSecreto ?  asignarTextoElemento('p','El número secreto es menor') : asignarTextoElemento('p','El número secreto es mayor'); 
            limpiarInput();
            nroIntentos ++;
        }
}

function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');  
    
}

condicionesIniciales();
