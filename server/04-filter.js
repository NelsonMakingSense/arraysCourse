const words = ['spray', 'limit', 'elite', 'exuberant']

let arrayRes = []

// solucion con un ciclo for 

for (let index = 0; index < words.length; index++) {
    
    if(words[index].length > 5) {
        arrayRes.push(words[index])
    } 
   
}

console.log(arrayRes)

// solucion con map 

const rta = words.filter(item => item.length >= 6)

console.log(rta)


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

//   con filter podemos poner la condicion directamente en el callback y filter haria un nuevo array con los elementos que cumplan esa condicion 

let filterDelivered = orders.filter(item => item.delivered && item.total >= 150)

console.log(filterDelivered)

// con filter podemos hacer una funcion de busqueda sencilla 

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

let solutionArray = (['amor', 'sol', 'piedra', 'día'])

function solution(array) {
    return array.filter(item => item.length > 3)
}; 

console.log(solution(solutionArray))
