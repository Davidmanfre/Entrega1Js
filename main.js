const productos = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: 200 },
    { nombre: "Producto 3", precio: 300 }
];

let carrito = [];
let precioTotal = 0;

while (true) {
    const nombreProducto = prompt("Ingrese el nombre del producto (o escribe 'salir' para terminar):");

    if (nombreProducto.toLowerCase() === "salir") {
    break;
    }

    const productoEncontrado = productos.find(producto => producto.nombre === nombreProducto);

    if (productoEncontrado) {
    carrito.push(productoEncontrado);
    precioTotal += productoEncontrado.precio;
    console.log(`${nombreProducto} agregado al carrito`);
    } else {
    console.log(`No se encontró el producto ${nombreProducto}`);
    }
}

console.log("Carrito:", carrito);
console.log("Precio total:", precioTotal);