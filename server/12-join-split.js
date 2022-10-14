const elements = [ 'fire', 'water', 'air']

// solucion join con for 

let rtaFinal = ''
const separator = '--'

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator
    
}

console.log(`for: ${rtaFinal}`)

// solucion join con join(metodo)

const joinWithJoin = elements.join('--')

console.log(`join: ${joinWithJoin}`)

// lo contrario a join es split, tomamos un string y mediante split definimos que elemento divide el string y convertimos el string en un array 

const miFrase = 'este string se va a dividir en elementos de un array mediante el metodo split, y cada espacio dentro del string va a definir cada elemento'

let miFraseSplity = miFrase.split(' ').join('-').toUpperCase()

console.log(miFraseSplity)

