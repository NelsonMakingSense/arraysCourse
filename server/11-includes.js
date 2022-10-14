const pets = ['cat', 'dog', 'bat']

// ciclo for 

let includeInArray = false
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true
        break
    }
    
}

console.log(includeInArray)

// con el metodo includes, includes sirve tambien para strings, no recibe como parametro un arrow function sino simplemente el elemento que se busca 

const rta = pets.includes('dog')

console.log(`includes: ${rta}`)