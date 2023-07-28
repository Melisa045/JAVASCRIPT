class Producto {
    constructor(nombre, precio, cantidad, fechaEntrega) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.fechaEntrega = fechaEntrega
    }

    monstrarProducto() {
        console.log("Nombre del producto es : " + this.nombre)
        console.log("Precio del producto es : " + this.precio)
        console.log("Cantidad del producto es : " + this.cantidad)
        console.log("Fecha del producto es : " + this.fechaEntrega)

    }

    generarMonto() {

        return this.precio * this.cantidad
    }

    //Generar Descuento si es mayor a 2 cantidad recibirá un 5% de descuento
    generarDescuento() {
        if (this.cantidad >= 2) {
            let descuento = this.generarMonto() * 0.05

            return this.generarMonto() - descuento

        } else {

            return this.generarMonto()
        }
    }

    //Generar el Impuesto General a las Ventas
    generarIGV() {

        if (this.cantidad >= 2) {
            return this.generarDescuento() * 1.18

        } else {
            return this.generarMonto() * 1.18
        }
    }

}


function cantiProductos() {
    alert("Nuestros productos son : Rosas, Box ,Desayunos")
    return prompt("Cuantos productos vas a comprar?")
}


function crearProducto(cantiProductos) {
    const productos = []
  
    
    for (let i = 0; i < cantiProductos; i++) {

        nombre = prompt("Ingrese Nombre :: " + i)
        precio = parseInt(prompt("Ingrese precio :: " + i))
        cantidad = parseInt(prompt("Ingrese cantidad :: " + i))
        fechaEntrega = prompt("Ingrese fecha Entrega :: " + i)

        let producto = new Producto(nombre, precio, cantidad, fechaEntrega)
        productos.push(producto)
    }
    return productos

}

/* let resultado = crearProducto() */

const cantiProdElementos = cantiProductos()
const productos = crearProducto(cantiProdElementos)

productos.forEach((producto, index) => {
    console.log(`Detalle de los productos ${index + 1} :: `)
    producto.monstrarProducto()
    console.log("Monto por cantidad : " + producto.generarMonto())
    console.log("Monto con Descuento: " + producto.generarDescuento())
    console.log("Monto total incluído IGV: " + producto.generarIGV())
    console.log("========================================================")
}
)

/* const mayorVenta = productos.filter((product) => resultado.productos.generarIGV >= 500);
console.log("Ventas mayor igual a 500 soles :: "+ mayorVenta); */

const mayorVenta = productos.filter((productoFiltro) => productoFiltro.generarIGV() > 500);
console.log("Ventas mayores a 500 soles :: ", mayorVenta);