//////////////////////////////////////

// 3) Genere 2 prompt: uno que guarde el nombre del usuario y otro que permita al usuario ingresar una nota de menos de 30 caracteres.

/////// PARA EL CASO BLOG

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Verifique que la entrada del usuario sea menor a 30 caracteres. En el caso de que no lo sea, envíe una alerta con la siguiente frase: "Esta entrada excede la cantidad de caracteres disponibles."
// b) En el caso de que el ingreso sea correcto, envíe una alerta que muestre el nombre del usuario y la nota que acaba de ingresar.
// c) Realice un bucle que envíe tres cuadros de diálogo confirm que sean las solicitudes de amistad de nuevos contactos. En cada iteración se debe poder visualizar el mensaje: "El usuario ${i} te envió una solicitud de amistad". 

let nombre = prompt("Ingrese su nombre")
let nota = prompt ("Ingrese nota de menos de 30 caracteres")
let nombre2
let nota2
function extencionNota(nombre2,nota2){

    if ( nota.length > 30){
        alert("Esta entrada excede la cantidad de caracteres disponibles.")
        }
    else{
        alert(" Hola " + nombre2  + " su nota ingresada es : " + nota2 )
        }
}
extencionNota(nombre, nota)
function solicitud() {


    for (i = 1 ; i <= 3; i++){
    confirm (" El usuario " + i + " te envió una solicitud de amistad")
    }
}
solicitud()
