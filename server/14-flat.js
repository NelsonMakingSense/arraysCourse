const matriz = [
    [1,2,3],
    [4,5,6, [2,3, [4,5,6]]],
    [7,8,9]
]

// la solucion con for implicaria anidar ciclos for por cada array de profundidad que tenga la matriz, en este caso matriz es un array de array, pero si dentro de cada array del array hubiese otro array, habria que anidar un tercer for 

const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element)
    }
    
}

console.log(`for: ${newArray}`)

// el metodo flat simplifica este problema. Flat recibe como parametro la profundidad que necesitamos aplanar el array

const rta = matriz.flat()

console.log(`flat: ${rta}`)