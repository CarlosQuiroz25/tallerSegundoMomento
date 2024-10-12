
const numeros = [5, 8, 12, 15, 2, 4, 18, 21]

// Multiplica cada numero por 2
let multiplicacion = numeros.map(function(numero){
    return numero * 2
})
console.log(multiplicacion);

// Filtra los números que sean mayores a 10.
let mayoresDiez = numeros.filter(function(numero) {
    return numero > 10;
  });
  
console.log(mayoresDiez)

// Suma todos los números filtrados
const valorInicial = 0;
let suma = numeros.reduce(
  (acumulador, contador) => acumulador + contador,
  valorInicial,
);

console.log(suma)

