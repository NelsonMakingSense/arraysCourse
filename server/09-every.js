const number = [1,30,19,29,10,13]

// comprobar si todos los numeros de un array son menores a 40

// respuesta con un ciclo for normal:

let rta = true

for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if (element >= 40) {
        rta = false
    }
    
}

console.log('for', rta)

// respuesta con el metodo every

const rta2 = number.every(item => item <= 40 )

console.log('for2', rta2)

// ejercicio, hacer una funcion que diga si todos los participantes tienen menos de 18 años

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 12,
    },
  ];

  const solution = team.every(part => part.age < 16)

  console.log(`this is the solution to the challenge: ${solution}`)