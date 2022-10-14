const letters = ['a', 'b', 'c']

const newArray = []

// mi solucion

for (let index = 0; index < letters.length; index++) {
    let res = letters[index].concat('++')
    newArray.push(res)
    
}

// solucion teacher 

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++')    
}

console.log(letters)

console.log(newArray)

// solucion con map 

const arrayWithMap = letters.map(el =>  `${el} maps`)

console.log(arrayWithMap)


let arrayOfProduct = [{
    name: "cajas",
    price: 23,
    stock: 3
},{
    name: "ceniceros",
    price: 10,
    stock: 12
}, {
    name: "esferos",
    price: 14,
    stock: 43
}]

function solution(array){
    return array.map(item => ({
        ...item,
        taxes: Math.trunc(item.price * .19)
    }))
}; 
