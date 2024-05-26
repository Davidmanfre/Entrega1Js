let precioA = 500;
let precioB = 1000;
let precioC = 1500;

let precioTotal = 0;
let producto
let cantidad = 0;
let seguirComprando = true;


do {
    producto = prompt("Bienvenido a nuestra tienda online!\nEscribe con la siguiente letra el producto que quieres comprar:\nA: Shampoo\nB: Acondicionador\nC: Ambos").toUpperCase();
    cantidad = parseInt(prompt("Escribe la cantidad de productos que quieres comprar:"));

    while(isNaN(cantidad) || cantidad < 0) {
        alert("La cantidad debe ser un numero positivo!");
        cantidad = parseInt(prompt("Escribe la cantidad de productos que quieres comprar:"));}
    switch (producto) {
        case "A":
        precioTotal += precioA * cantidad;
        break;
        case "B":
            precioTotal += precioB * cantidad;
            break;
        case "C":
            precioTotal += precioC * cantidad;
            break;
        default:
            alert("El producto no existe");
            break;
    }
seguirComprando = confirm("Quieres seguir comprando?");

}while(seguirComprando); //

alert("El precio total de tu compra es: $ " + precioTotal );