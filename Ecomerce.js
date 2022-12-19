// CASO ECOMMERCE

// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
//     - id --> number
//     - producto --> nombre del producto
//     - precio --> number
//     - fechaVencimiento (en el caso de que tenga una) ---> string
//     - descripción --> string
//     - categoría (si tiene una) ---> string
//     - oferta (booleano) --> true o false

// Quiero que algunos de los elementos tengan un true en oferta.

class producto {
    constructor(idNumber, nombre, descripcion, categoria, oferta, precio){
    this.idNumber = idNumber
    this.nombre = nombre
    this.descripcion = descripcion
    this.categoria = categoria
    this.oferta = oferta
    this.precio = precio
    }
    }
    let arregloProducto = []
    const lapizGrafito = new producto (01, "lapiz grafito HB", "Lapiz grafito 2HB Faber-Castell", "lapiz", true, 20)
    const lapicesColores = new producto (02, "lapices colores", "Caja lapices colores largos surtidosx12 Faber-Castell", "lapiz", false, 700)
    const anotadorFluo = new producto (03, "anotador fluo A5", "Anotador  fluo simil cuero hojas lisas A5", "libreta", true, 1000)
    const anotadorMonet = new producto (04, "anotador monet A5", "Anotador motivo monet hojas ralladas A5", "libreta", true, 1000)
    const anotadorFlower = new producto (05, "anotador flower world A6", "Anotador motivo flores hojas ralladas con señalador A6", "llibreta", false, 800)
    const gomaCaballito = new producto (06, "goma caballito de mar", "Goma caballito de mar naranja 3cm", "goma", true, 50)
    const gomaCanguro = new producto (07, "goma canguro", "Goma canguro verde 3.5cm", "goma", false, 50)
    const microfibrasFluo = new producto (08, "microfibras fluo x5", "Microfibra fluo liner 038 filgo x5", "fibra", true, 900)
    const microfibrasPastel = new producto (09, "microfibras pastel x6", "Microfibra pastel liner 038 filgo x6", "lapiz", true, 900)
    const lapiceraHamburguesa = new producto (10, "lapicera gel hamburguesa", "Lapicera hamburguesa de gel negro", "lapicera", false, 300)
    const lapiceraPapafrita = new producto (11, "lapicera gel papafrita", "Lapicera papafrita de gel negro", "lapicera", true, 300)
    const lapiceraCocacola = new producto (12, "lapicera gel vaso cocacola", "Lapicera cocacola de gel negro", "lapicera", true, 300)
    const lapiceraGatito = new producto (13, "lapicera gel gatito", "Lapicera gatito blanco de gel negro", "lapicera", true, 300)
    const sacapuntasMessi = new producto (14, "sacapuntas jugador de futbol", "Sacapuntas messi dobele con goma forma messi", "sacapuntas", true, 300)
    const sacapuntasChancito = new producto (15, "sacapuntas chanchito", "Sacapuntas chanchito doble forma de chanchito colores surtidos", "sacapuntas", false, 300)
    
    
    
    
    
    arregloProducto.push (lapizGrafito)
    arregloProducto.push (lapicesColores)
    arregloProducto.push (anotadorFluo)
    arregloProducto.push (anotadorMonet)
    arregloProducto.push (anotadorFlower)
    arregloProducto.push (gomaCaballito)
    arregloProducto.push (gomaCanguro)
    arregloProducto.push (microfibrasFluo)
    arregloProducto.push (microfibrasPastel)
    arregloProducto.push (lapiceraHamburguesa)
    arregloProducto.push (lapiceraPapafrita)
    arregloProducto.push (lapiceraCocacola)
    arregloProducto.push (lapiceraGatito)
    arregloProducto.push (sacapuntasMessi)
    arregloProducto.push (sacapuntasChancito)

    console.table (arregloProducto)




// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

let ofertaProducto = [
arregloProducto.forEach((element) => {
    if (element.oferta === true) {
    console.log(`El precio final con descuento de ${element.nombre} es: ${element.precio*0.90}`)
    }
})
]
console.log(ofertaProducto)

// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
// Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos: 
//     - [...array] ---> spread operator
//     - array.slice() ---> copia segura en otra variable
//     - [].concat(array) ---> copia segura en otra variable

let copiaArregloProducto = arregloProducto.slice()





copiaArregloProducto.sort( ( a, b ) => {
if (a.nombre < b.nombre){
return -1
} else if ( a.nombre > b.nombre ){
return 1
} else {
return 0
}
})

console.log(copiaArregloProducto)


// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y
// que muestre en consola cada una de las ofertas.

let ofertasTienda = confirm("¿Desea ver las ofertas de la tienda?")  
        if (ofertasTienda == true){
            copiaArregloProducto.filter((ofertas) =>{
            if(ofertas.oferta == true){
                console.log(`Existe: ${ofertas.nombre} en oferta`)}
            })
        
        }









// 5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().


let buscarConFind = prompt("Ingrese el producto a buscar :\n'lapiz grafito HB'\n'lapices colores'\nanotador fluo A5'\n'anotador monet A5'\n'anotador flower world A6'\n'goma caballito de mar'\n'goma canguro'\n'microfibras fluo x5'\n'microfibras pastel x6'\n'lapicera gel hamburguesa'\n'lapicera gel papafrita'\n'lapicera gel vaso cocacola'\n'lapicera gel gatito'\n'sacapuntas jugador de futbol'\n'sacapuntas chanchito'")

const prodEnccontrado = arregloProducto.find(producto => producto.nombre == buscarConFind)

alert(`${prodEnccontrado.descripcion} con un precio de ${prodEnccontrado.precio}`);
