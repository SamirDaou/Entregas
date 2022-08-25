let totalCompra= 0 
let productoSeleccionado =parseInt(prompt( "Ingresa el numero del producto que desea comprar: 1.Anotador - 2.Libreta - 3.Carpeta - 4.Cuaderno - 5.Agenda - 6.Libro "))
let seguirComprando =true
let decision
while(seguirComprando===true){
if(productoSeleccionado===1){
    totalCompra=totalCompra +100
} else if (productoSeleccionado===2){
    totalCompra=totalCompra +200
}else if (productoSeleccionado===3){
    totalCompra=totalCompra +300
}else if (productoSeleccionado===4){
    totalCompra=totalCompra +400
}else if (productoSeleccionado===5){
    totalCompra=totalCompra +500
}else if (productoSeleccionado===6){
    totalCompra=totalCompra +600
} else{
    productoSeleccionado=parseInt(prompt("ingresa un producto existente: 1.Anotador - 2.Libreta - 3.Carpeta - 4.Cuaderno - 5.Agenda - 6.Libro "))
continue
}

decision = parseInt(prompt("Quieres seguir agregando productos? 1.Si - 2.No "))
if(decision===1){
    productoSeleccionado = parseInt(prompt("Ingresa el numero del producto que desea comprar: 1.Anotador - 2.Libreta - 3.Carpeta - 4.Cuaderno - 5.Agenda - 6.Libro "))
}else if (decision===2){
    seguirComprando = false
}

}

alert ("el valor total sin descuentos ni impuestos es: "+totalCompra)

function calcularPrecioConDescuento(valor){
let descuento = 0
if(valor<=300){
descuento = 10
}else if(valor>300 && valor<=600){
    descuento = 15
} else if(valor>600 && valor<1500){
    descuento = 20
} else{
    descuento = 25
}
let valorDescuento =valor* (descuento/100)
valor = valor - valorDescuento
return valor
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert ("elprecio total con descuento sin impuestos es: "+valorConDescuento)


function calcularPrecioConImpuesto(valor){
    const impuestos = valor * (5/100)
return valor + impuestos
}
let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert("el valor final a pagar con descuentos e impuestos es: "+valorFinalConImpuesto)



