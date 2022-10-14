const numbers = [1, 30, 49, 29, 10, 13]

let rta = undefined

// funcion for para devolver el primer elemento que cumpla con la condicion 

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30) {
        rta = element
        break
    }
    
}

console.log(`are there 30 in numbers array?: ${rta}`)

// funcion find que hace lo mismo que la anterior pero mas corta 


const rta2 = numbers.find(item => item === 30444)

console.log(`are there 30 in numbers array? search with find method: ${rta2}`)


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

//   esta funcion devuelve el elemento que cumple la condicion

  const rta3 = products.find(item => item.id === '🍔')
  console.log(rta3)

//   en cambio, esta funcion devuelve el indice del elemento que cumple la condicion


const rta4 = products.findIndex(item => item.id === '🍔')
console.log(rta4)