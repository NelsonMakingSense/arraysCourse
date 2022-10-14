const { parseISO } = require("date-fns")

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]
  

  const rta = users.map(user => user.attributes)
//   esto nos da un array de arrays, (el valor de cada atributo atributes es un array)

  console.log(rta)

//   Ahora si queremos volver este array de arrays en un array de elements usamos flat 

const rtaFlat = rta.flat()

console.log(rtaFlat)

// para evitarnos todos estos pasos podemos usar flatmap

const rtaFlatMap = users.flatMap(user => user.attributes)

console.log(rtaFlatMap)

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const rta3 = Object.keys(calendars)
  console.log(rta3)

  const rta4 = Object.values(calendars).flat(item => {
    
    return item.map(date => date.startDate)
})
  console.log(rta4)