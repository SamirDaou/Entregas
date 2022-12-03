//arrays

let nombre = prompt ("Ingresa tu nombre.")
alert ( " Bienvenido al gym virtual, " + nombre)
let zona = "Dia 1 = Pecho"
alert (zona)
function rutina (zona = prompt ("¿PORQUE EJERCICIO QUERES EMPEZAR?\ 1 \ 2\ 3 \ 4 \ 5 ")) {
    switch (zona) {
        case "1":
            alert ("3 series de 15 repeticiones en pullover");
        case "2":
            alert ("3 series de 12 repeticiones en press banca");
        case "3":
            alert ("4 series de 10 repeticiones en apertura con mancuernas"); 
           
        default: 
            return alert ("Rutina completa, vamos por más");
    }

}
rutina ()



let rutinas = ["1-Pecho","2-Piernas","3-Brazos","4-Espalda","5-Abdomen"]
console.log ( rutinas)
let trabajodehoy = (prompt ("¿Que trabajaste hoy?"));
rutinas.shift ();
    for (let index = 0; index < rutinas.length; index++) {
        console.log (rutinas [index]);
}
alert (" Buen trabajo. Queda trabajar " + rutinas)
console.log ( rutinas)
