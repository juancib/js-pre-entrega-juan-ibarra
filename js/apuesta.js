//generar valores
let cuotaA = 0;
let cuotaB = 0;
let cuotaE = 0;
let apuesta = 0;
let ganancia = 0;
let resultadoGanador = 0;
let puntos = 10000;
let cuotaequipo1 = document.getElementById ("cuotaequipo1");
let cuotaempate = document.getElementById ("cuotaempate");
let cuotaequipo2 = document.getElementById ("cuotaequipo2");
let mensaje = document.getElementById ("resultado");

//genera un valor aleatorio de cada cuota
function cuotaAleatoria(minimo, maximo, decimales) {
    let precision = Math.pow(10, decimales);
    minimo = minimo*precision;
    maximo = maximo*precision;
    cuotaA = Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
    cuotaB = Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
    cuotaE = Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
}

function mostrarCuotas(){
    cuotaequipo1.innerHTML = "("+cuotaA+")";
    cuotaempate.innerHTML = "("+cuotaE+")";
    cuotaequipo2.innerHTML = "("+cuotaB+")";
}

//genera de forma aleatoria una de las 3 opciones la cual será la ganadora
function opcionGanadora (min, max){
    resultadoGanador = Math.floor((Math.random() * (max - min + 1)) + min);
}

//le pide al usuario que elija una opción y la cantidad de puntos a apostar y determina si el usuario gana o pierde
function betEquipo1(){
    let equipo1 = document.getElementById("equipo1").value;
    if (resultadoGanador == 1) {
        ganancia = equipo1 * cuotaA;
        mensaje.innerHTML = "Felicitaciones ganaste "+ ganancia + " puntos";
    }else{
        mensaje.innerHTML = "Perdiste :´(";
    }
}

function betEmpate(){
    let empate = document.getElementById("empate").value;
    if (resultadoGanador == 2) {
        ganancia = empate * cuotaE;
        mensaje.innerHTML = "Felicitaciones ganaste "+ ganancia + " puntos";
    }else{
        mensaje.innerHTML = "Perdiste :´(";
    }
    
}

function betEquipo2(){
    let equipo2 = document.getElementById("equipo2").value;
    if (resultadoGanador == 3) {
        ganancia = equipo2 * cuotaB;
        mensaje.innerHTML = "Felicitaciones ganaste "+ ganancia + " puntos";
    }else{
        mensaje.innerHTML = "Perdiste :´(";
    }
    
}

//iniciar
cuotaAleatoria(0,30,2);
mostrarCuotas();
opcionGanadora (1,3);