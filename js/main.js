/*

casa de apuestas deportivas

se mostrara 3 opciones: (1) Equipo A, (2) Equipo B y (3) Empate con su cuota de pago al azar

se le pedira al usuario que ingrese la opción por la cual quiera apostar

luego se le pedira cuantos puntos quiere apostar

se genera un resultado al azar

se informa si el usuario ganó o perdió

*/

//generar valores
let cuotaA = 0;
let cuotaB = 0;
let cuotaE = 0;
let apuesta = 0;
let ganancia = 0;
let resultadoGanador = 0;
let puntos = 10000;

//genera un valor aleatorio de cada cuota
function cuotaAleatoria(minimo, maximo, decimales) {
    let precision = Math.pow(10, decimales);
    minimo = minimo*precision;
    maximo = maximo*precision;
    cuotaA = Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
    cuotaB = Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
    cuotaE = Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
}

//genera de forma aleatoria una de las 3 opciones la cual será la ganadora
function opcionGanadora (min, max){
    resultadoGanador = Math.floor((Math.random() * (max - min + 1)) + min);
}

//le pide al usuario que elija una opción y la cantidad de puntos a apostar y determina si el usuario gana o pierde
function realizarApuesta(){

    opcion = parseInt(prompt("Eligé la opción en la cual quieras apostar:"+"\n"+"(1) Equipo A '"+cuotaA+"'"+"\n"+"(2) Empate '"+cuotaE+"'"+"\n"+"(3) Equipo B '"+cuotaB+"resultado "+resultadoGanador));

    apuesta = parseInt(prompt("Tienes "+puntos+" puntos disponibles."+"\n"+"Cuántos deseas apostar?"));
    if(apuesta > puntos || isNaN(apuesta)){
        apuesta = parseInt(prompt("Tu apuesta es incorrecta"+"\n"+"Tienes "+puntos+" puntos disponibles."+"\n"+"Cuántos deseas apostar?"));
        resultado()
    }else{
        resultado();
    }
}

//calcular la posible ganacia de la apuesta
function calcularGanancia(opcion){
    if(opcion == 1){
        return ganancia = apuesta * cuotaA;
    }else if(opcion == 2){
        return ganancia = apuesta * cuotaE;
    }else{
        return ganancia = apuesta * cuotaB;
    }
}

//calcular si el usuario gano o perdio

function ganador(correcta,opcion){
    let opcionCorrecta = false;
    for (let i = 1; i <= 3; i++) {
        if(correcta == opcion){
            opcionCorrecta = true;
            break
        }
    }
    return opcionCorrecta;
}

function resultado(){
    //se actualizan los puntos del usuario
    puntos = puntos - apuesta;
    // calcula la ganancia
    ganancia = calcularGanancia(opcion);

    if (ganador(resultadoGanador,opcion)){
        puntos = puntos + apuesta + ganancia;
        alert("Ganaste "+ganancia+" puntos."+"\n"+"Tienes "+puntos+" puntos disponibles.");
    }else{
        alert("Lo sentimos, perdiste"+"\n"+"Tienes "+puntos+" puntos disponibles.");
    }
}

//iniciar

cuotaAleatoria(0,30,2);
opcionGanadora(1,3);
realizarApuesta();