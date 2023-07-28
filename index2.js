class Producto {
    constructor(nombre, precio, cantidad, fechaEntrega) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.fechaEntrega = fechaEntrega;
    }

    calcularIGV() {

        return this.montoTotal = this.precio * 1.18;

    }

    calcularDescuento() {
        let descuento = 0;


        if (this.precio >= 200 && this.precio <= 500) {
            descuento = this.precio * 0.05;


        } else if (this.precio >= 501 && this.precio <= 1500) {
            descuento = this.precio * 0.10;

        } else {
            return "No hay descuento";
        }

        return descuento;

    }


    calcularFechaEntrega() {

        let fechaInicio = new Date();
        fechaInicio = fechaInicio.getDate();

        if (this.fechaEntrega >= (fechaInicio + 2)) {
            console.log("Producto se entregará en la fecha ingresada.")
        } else {
            console.log("Por favor solicitar la entrega con 48 horas de anticipación.")
        }

    }
}

function crearProducto(i) {

    let nombre = prompt("Ingrese Producto " + i + ":");
    let precio = parseInt(prompt("Ingrese Precio " + i + ":"));
    let cantidad = parseInt(prompt("Ingrese Cantidad " + i + ":"));
    let fechaEntrega = prompt("Ingrese Fecha Engrega" + i + ":");

    let producto = new Producto(nombre, precio, cantidad, fechaEntrega);
    return producto;

}

for (let i = 1; i <= 3; i++) {
    let resultado = crearProducto(i);
    console.log(resultado);

    console.log("Precio incluido IGV: " + resultado.calcularIGV());
    console.log("Descuento:" + resultado.calcularDescuento());
    console.log("Fecha:" + resultado.calcularFechaEntrega());


}

function saludar() {
    console.log("Gracias por comprar nuestros productos!!!");
    alert("Gracias por comprar nuestros productos!!!");
}
saludar();
