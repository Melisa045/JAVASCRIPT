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

    productos.push(producto)

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

    Swal.fire({
        title: '¿Estás seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: "No, cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            productos.splice(index, 1)
            guardarLocalStorage()
            mostrarTarea()
        }
    });


}

let formbtnFinalizar = document.getElementById("btnFinalizar");
formbtnFinalizar.style.display = "none";

window.onload = function () {
    let btnFin = document.getElementById("btnFinalizar");

    // Set a timeout to show the button after 3000 milliseconds (3 seconds)
    setTimeout(() => {
        btnFin.style.display = "block";
    }, 3000);
};

formbtnFinalizar.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
        imageUrl: '/img/carritoCompras.png',
        title: 'Gracias por confiar en nosotros!',
        text: '¿Guardar los datos?',
        confirmButtonText: 'Si'
    });
});
