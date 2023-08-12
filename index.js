 

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    generarMonto() {

        return this.precio * this.cantidad
    }
    generarDescuento() {
        if (this.cantidad >= 2) {
            let descuento = this.generarMonto() * 0.05

            return this.generarMonto() - descuento

        } else {

            return this.generarMonto()
        }
    }

    generarIGV() {

        if (this.cantidad >= 2) {
            return this.generarDescuento() * 1.18

        } else {
            return this.generarMonto() * 1.18
        }
    }
}

let form = document.getElementById("Registrar")
const productos = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value
    let precio = parseFloat(document.getElementById("precio").value)
    let cantidad = parseInt(document.getElementById("cantidad").value)

    let producto = new Producto(nombre, precio, cantidad)

    let monto = producto.generarMonto()
    let descuento = producto.generarDescuento()
    let impuesto = producto.generarIGV()

    //Crear objeto
    let productData = {
        producto: producto,
        monto: monto,
        descuento: descuento,
        impuesto: impuesto
    };

    productos.push(productData)
    
    console.log(productData)
    guardarLocalStorage()
    mostrarTarea()

    //Limpiar campos
    document.getElementById("nombre").value = ""
    document.getElementById("precio").value = ""
    document.getElementById("cantidad").value = ""

})

let lista = document.getElementById("lista")

const mostrarTarea = () => { //es lo mismo function mostrarTarea(){}
    lista.innerHTML = "" //Limpiamos la lista que el UL este vacio
    productos.forEach((producto, index) => {
        lista.innerHTML += `
    <li>
    <span>Producto: ${producto.nombre} Precio: ${producto.precio} Cantidad: ${producto.cantidad} 
    Monto a Pagar: ${producto.generarMonto()} Monto con Descuento: ${producto.generarDescuento()} 
    Monto Total : ${producto.generarIGV()}</span>
    <button class="delete" onclick="eliminarTarea(${index})">Eliminar</button>
    </li>
    `
    }
    )
}

const guardarLocalStorage = () => {
    localStorage.setItem("productos", JSON.stringify(productos))

}

const eliminarTarea = (index) => {
    productos.splice(index, 1)
    guardarLocalStorage()
    mostrarTarea()
}


