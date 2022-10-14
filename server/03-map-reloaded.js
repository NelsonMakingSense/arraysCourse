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

  console.log(orders)

//   la siguiente funcion modifica el array original, por lo que esta mal
  const result = orders.map(item => item.total)

//   la solucion para evitar que el array original se modifique es usar el spread operator

  const rta = orders.map((item) => {
    return {
        ...item,
        taxes: .19
    }
  })

  console.log(result)