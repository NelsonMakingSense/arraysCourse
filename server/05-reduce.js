const totals = [2,3,4,5,6,3,2]

let sumTotalNums = 0

// solucion con for 

for (let index = 0; index < totals.length; index++) {
    sumTotalNums = sumTotalNums + totals[index]
    
}

console.log(sumTotalNums)

// solucion con reduce, reduce recibe dos parametros, el callback con los parametros acumulador y elemento iterado y el segundo parametro es desde donde empieza el acumulados, generalmente es 0 pero puede empezar desde 20 por ejemplo

const rta =  totals.reduce((acumulador, elementoIterado) => acumulador + elementoIterado, 20 )
console.log(rta)