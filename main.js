const productos = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: 200 },
    { nombre: "Producto 3", precio: 300 }
];

let carrito = [];
let precioTotal = 0;

  // Función para mostrar los productos
function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
    });
}

  // Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
    const producto = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

    if (producto) {
    carrito.push(producto);
    precioTotal += producto.precio;
    console.log(`${producto.nombre} agregado al carrito`);
    } else {
    console.log(`No se encontró el producto ${nombreProducto}`);
    }
}

  // Mostrar productos
mostrarProductos();

  // Bucle para agregar productos al carrito
while (true) {
    let nombreProducto = prompt("Ingrese el nombre del producto (o escribe 'salir' para terminar):");

    if (nombreProducto.trim().toLowerCase() === "salir") {
    break;
    }

    agregarAlCarrito(nombreProducto.trim());
}
// Mostrando el carrito
console.log("Tu Carrito:", carrito);
console.log("Precio total a pagar:", precioTotal);