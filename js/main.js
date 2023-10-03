/*

casa de apuestas deportivas

se mostrara 3 opciones: (1) Equipo A, (2) Equipo B y (3) Empate con su cuota de pago al azar

se le pedira al usuario que ingrese la opción por la cual quiera apostar

luego se le pedira cuantos puntos quiere apostar

se genera un resultado al azar

se informa si el usuario ganó o perdió

*/

//generar valores
let login = [{user: "juan94",pass: "juan1234"},{user: "admin",pass: "admin"},{user: "invitado",pass:"1234"}];
//valida que el usuario y la contraseña esten correctas con el array objeto

function hacerLogin(){
    usuario = document.getElementById("user").value;
    contrasenia = document.getElementById("pass").value;

    if(login.some(e => e.user === usuario) && login.some(e => e.pass === contrasenia)){
        window.location.href= "apuesta.html";
    }else{
        location.reload();
    }
}

//iniciar