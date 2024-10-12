

const productos = [
    {nombre: 'Laptop', categoria: 'tecnología', precio: 1000},
    {nombre: 'Smartphone', categoria: 'tecnología', precio: 600},
    {nombre: 'Camisa', categoria: 'ropa', precio: 30},
    {nombre: 'Teclado', categoria: 'tecnología', precio: 50},
    {nombre: 'Zapatillas', categoria: 'ropa', precio: 80}
]

const productosFiltrados = productos.filter((categoria) => categoria.categoria === 'tecnología')

const productosConDescuento = productosFiltrados.map(producto => ({
    ...producto, precio: producto.precio * 0.9
}))

const totalConDescuento = productosConDescuento.reduce((total, producto) => total + producto.precio, 0)

console.log(productosFiltrados);
console.log(productosConDescuento);
console.log(totalConDescuento);





