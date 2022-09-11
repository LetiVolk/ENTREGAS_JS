const pizzas = [
    {
        id: 1,
        nombre: "Fugazeta",
        ingredientes: ["muza", "cebolla"],
        precio: 500,
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["muza", "tomate", "albahaca"],
        precio: 700,
    },
    {
        id: 3,
        nombre: "Cuatro Quesos",
        ingredientes: ["muza", "roquefort", "provolone"],
        precio: 1000,
    },
    {
        id: 4,
        nombre: "Morrón con Jamón",
        ingredientes: ["muza", "morrón", "jamón"],
        precio: 1000,
    },
    {
        id: 5,
        nombre: "Hongos",
        ingredientes: ["muza", "cebolla", "hongos"],
        precio: 1200,
    },
    {
        id: 6,
        nombre: "Huevo",
        ingredientes: ["muza", "cebolla", "salchicha", "huevo"],
        precio: 1300,
    },

];

/* a) */
const IdImpares = pizzas.filter(pizza => pizza.id % 2 == 1)
IdImpares.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene id impar`)
}); 

/* b) */
const PizzaMenosDe600 = pizzas.filter(pizza => pizza.precio < 600)
if (PizzaMenosDe600.length >= 1) {
    PizzaMenosDe600.forEach((pizza) => {
        console.log(`La pizza ${pizza.nombre} tiene un valor de $${pizza.precio}`)
    });
}
else { console.log(`Ninguna pizza vale menos de $600`); } 

/* c) */
pizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} cuesta $${pizza.precio}`)
})

/* d) */
pizzas.forEach(pizza => {
    console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes:`)
    pizza.ingredientes.forEach((ing) => {
        console.log(`- ${ing}`)
    })
})
