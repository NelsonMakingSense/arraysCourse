const elements = [1,1,2,2]
const othersElements = [3,3,4,4]

// si creamos nuestra variable a iterar de la siguiente manera, el array elements va a modificarse,
// let newArray = elements

// para crear un nuevo objeto distinto al original se hace:

let newArray = [...elements]

for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element)
    
}

console.log(`for: ${newArray}`)

// solucion con concat, Con concat no tenemos que preocuparnos que la funcion modifique el array original porque concat es inmutable

const rta = elements.concat(othersElements)

console.log(`concat: ${rta}`)

// esta es otra forma valida de concatenar arrays 

const concat2 = [...elements, ...othersElements]
console.log(`merge con spread operator: ${concat2}`)

// que pasa si queremos agregar a un array un string: Se puede agregar con y sin el spread operator (...)

// el primer ejemplo, devuelve un arrray con un elemento hola mundo agregado

const concat3 = [...elements, 'hola mundo']

console.log(concat3)

// respuesta [ 1, 1, 2, 2, 'hola mundo' ]

// en el segundo ejemplo toma cada caracter del hola mundo como un elemento distinto

const concat4 = [...elements, ...'hola mundo']

console.log(concat4)

// respuesta: [
//     1,   1,   2,   2,   'h',
//     'o', 'l', 'a', ' ', 'm',
//     'u', 'n', 'd', 'o'
//   ]

// otra opcion es usar push, push no es inmutable, o sea que modificaria el array original. 

// si mandamos directamente el otro array como parametro a push, nos devuelve un array con el array othersElements como un elemento mas del array elements,

// elements.push(othersElements)

// si queremos que se unan ambos arrays y queden todos los elementos dentro de uno solo, debemos usar el spread operator
// elements.push(...otherElements)

