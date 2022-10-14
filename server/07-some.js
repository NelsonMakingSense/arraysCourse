// some busca en un array algun elemento que cumpla con una codicion dada. Si un solo elemento cumple, devuelve true. Solamente devuelve false si ningun elemento del array cumple con la condicion

const numbers = [1,2,3,4]

// funcion con for 

let rta = false
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0) {
        rta = true
        break
    }  
    
}

console.log(rta)

// funcion con some 

const rta2 = numbers.some(item => item % 2 === 0)

console.log(`respuesta con some: ${rta2}`)

// usar some para saber si alguna orden fue envidada

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
    {
      customerName: "Nicolas",
      total: 2322,
      delivered: false,
    },
  ];

  const rta3 = orders.some(item => item.delivered)

console.log(`hava any orders been delivered: ${rta2}`)

// usar some para saber si dos fechas se cruzan con some y con la libreria data-fns 

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
  
  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate },
            {start: newDate.startDate, end: newDate.endDate}
        )
    })
}

console.log( 'isOverlap', isOverlap(newAppointment))
