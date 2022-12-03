// 1) Generar dos variables: usuarioConEmail y contrasenia. Asignarle un valor aleatorio. A través de tres prompts, 
//pídale al usuario los siguientes datos.

/////////// PARA EL CASO LOGIN

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES 
//DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.


// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y 
//la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre sí. En el caso de que
// no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o "Su contras..
//eña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".
// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta 
//debe saludar al usuario que se loguea.
// c) Valide con un bucle que el usuario tiene una arroba. De ser así, envíe el mensaje en consola: "Es un mail válido"
// e interrumpa el ciclo for con break. 
// d) Valide si la contraseña del usuario tiene más de 8 caracteres. En el caso de que tenga más de ocho caracteres, no 
//haga nada. De lo contrario, envíe una alerta con el siguiente mensaje: "Su contraseña es insegura."
// e) Valide con un bucle que la contraseña al menos tenga un número. En el caso de que no tenga uno, envíe un prompt que
// exprese lo siguiente: "Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?". Si el usuario dice si, 
//entonces cambie el valor de la contraseña.

let nombreUsuario = prompt("Ingrese su nombree");
let usuarioEmail = "samir@falso";
let contrasenia = "contra";

let usuario2 = prompt("ingrese su usuario");
let contrasenia2 =prompt("Ingrese su contraseña");

function usuarioContrasenia () {

if ( usuarioEmail !== usuario2 && contrasenia !== contrasenia2) {
    alert("SU USUARIO Y CONTRASEÑA SON ERRÓNEOS")
    }
else if  (usuarioEmail !== usuario2) {
    console.log("Su usuario es erróneo")
    alert("Su usuario es erróneo")
    }
else if ( contrasenia !== contrasenia2) {
    console.log("Su contraseña es errónea")
    alert("Su contraseña es errónea")
    }
}
usuarioContrasenia()
let usuario;
function mensajeUsuario (usuario) {
    if (usuarioEmail==usuario2 && contrasenia==contrasenia2)
    {
    alert(`Bienvenido ${usuario}`)
    }
}
mensajeUsuario(nombreUsuario)


//c) corroborar si contiene @ 
    
let Email;
function validarEmail(Email) {
    for (let i = 0; i < Email.length; i++) {
        if (Email.charAt(i)=="@") {
            console.log("✅Es un Email válido");
break
        }
    }
}
validarEmail(usuarioEmail) 


//d) contra insegura
if (contrasenia.length < 8) {
    console.log(`su contraseña ${contrasenia} es insegura`)
    alert("Su contraseña es insegura.")
}






// //e) contra numerica
let numero = 0
let newContrasenia = contrasenia + "123"
for (i = 0; i < contrasenia.length; i++) {
    if (contrasenia.charAt(i) != 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
        let numero = prompt(
        "Su contraseña debe tener caracteres alfanuméricos. INGRESE 1 si desea cambiarla? "
        );
    
    if (numero == "1"){
        alert(`su nueva contraseña es: ${newContrasenia}`)
        console.log(`su nueva contraseña es: ${newContrasenia}`)
        }
        break
    }
}



