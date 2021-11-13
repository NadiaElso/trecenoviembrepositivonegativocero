//almacene un arreglo de dimensión N numeros
//(la cantidad es ingresada por el ususuario
// muestre cuantos son positivos, negativos, ceros)

let dimension: number = Number(prompt("Ingrese dimension"));

let numeros: number[] = new Array(dimension);

let cantidadpositivos: number = 0;
let cantidadnegativos: number = 0;
let cantidadceros: number = 0;

for (let index = 0; index < dimension; index++) {
  numeros[index] = Number(prompt("Ingrese numeros"));

  if (numeros[index] > 0) {
    cantidadpositivos++;
  } else if (numeros[index] < 0) {
    cantidadnegativos++;
  } else if (numeros[index] === 0) cantidadceros++;
}

console.log("positivo" + cantidadpositivos);
console.log("negativo" + cantidadnegativos);
console.log("ceros" + cantidadceros);
