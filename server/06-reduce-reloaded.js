const items = [1, 3, 2, 3]

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(rta)

// ouput 

// {
//     1: 1,
//     3: 2,
//     2: 1
// }


const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

let userLevel = data
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(userLevel)

let numbersX = [2,3,4,6,4,3,7,8,6,4,6,8,9,5,10, 33, 200]

// recuerde, en la siguiente funcion reduce, obj, es el contador, el objeto vacio, e item es el elemento actual que se esta evaluando. 

let numberRange = numbersX.reduce((esteEsElContador, yEsteEsElItemActual) => {
    if(yEsteEsElItemActual > 0 && yEsteEsElItemActual < 6) {
        esteEsElContador['1-5']++
    } else if (yEsteEsElItemActual > 5 && yEsteEsElItemActual < 9) {
        esteEsElContador['6-8']++
    } else if (yEsteEsElItemActual > 8 && yEsteEsElItemActual < 11) {
        esteEsElContador['9-10']++
    } else if(yEsteEsElItemActual > 10) {
        esteEsElContador['outofrange'] = 1
    }
    return esteEsElContador
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0
})

console.log(numberRange)

// reto
// const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
// const result = arr.reduce((obj, item) => {
//   if (item <= 5) {
//     obj['1-5']++
//   } else if (item <= 8) {
//     obj['6-8']++
//   } else {
//     obj['9-10']++
//   }
//   return obj
// }, {
//   '1-5': 0,
//   '6-8': 0,
//   '9-10': 0
// })

// console.log(result)
