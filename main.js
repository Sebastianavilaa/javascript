const numeros = [2, 4, 6, 8, 10, 12, 14, 16]

for (let i= 0; i < numeros.length; i++) {
    alert(numeros[i]);
}


let carros = ["toyota", "volvo", "ferrari"];
let borrarultimo = carros.pop();

console.log(carros);  "toyota", "volvo"
console.log(borrarultimo); "ferrari"


// objetos 2

const carro1={
modelo: "2022",
marca: "ferrari",
lanzamiento : "2022-01-12",
conductores : 31,
}

const carro2={
modelo: "2014",
marca: "volvo",
lanzamiento : "2014-03-25", 
conductores : 11,
}

console.log(carro1.marca)


const celular = 
  {
      //clave:valor
      marca:"lphone 13",
      procesador: "A14 bionic",
      ram: 6,
  }

  const carros = [
    {nombre: 'toyota', precio: 13215000},
    {nombre: 'ferrari', precio: 21322000},
    {nombre: 'lambo', precio: 220034340},
    {nombre: 'porshe', precio: 13436000},
]

const nombres = carros.map((el) => el.nombre)
console.log(nombres)


const carros = [
  {nombre: 'toyota', precio: 13215000},
  {nombre: 'ferrari', precio: 21322000},
  {nombre: 'lambo', precio: 220034340},
  {nombre: 'porshe', precio: 13436000},
]

const resultado = carros.filter((el) => el.nombre.includes('ty'))
const resultado2 = carros.filter((el) => el.precio < 13215000)

console.log(resultado)
