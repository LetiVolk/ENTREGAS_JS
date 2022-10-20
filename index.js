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
/* ENTREGA 1
a) 
const IdImpares = pizzas.filter(pizza => pizza.id % 2 == 1)
IdImpares.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene id impar`)
}); 

b) 
const PizzaMenosDe600 = pizzas.filter(pizza => pizza.precio < 600)
if (PizzaMenosDe600.length >= 1) {
    PizzaMenosDe600.forEach((pizza) => {
        console.log(`La pizza ${pizza.nombre} tiene un valor de $${pizza.precio}`)
    });
}
else { console.log(`Ninguna pizza vale menos de $600`); } 

c) 
pizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} cuesta $${pizza.precio}`)
})

d) 
pizzas.forEach(pizza => {
    console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes:`)
    pizza.ingredientes.forEach((ing) => {
        console.log(`- ${ing}`)
    })
}) */

/* ENTREGA 2 */
/********************************************************************************
const pizzaForm = document.getElementById('pizza_form');
const numberInput = document.getElementById('choice');
const msjContainer = document.querySelector('.msj'); 

const checkChoice = () => {
    let valid = false;
    const choiceValue = numberInput.value.trim();
    if (isEmpty(choiceValue)) {
        showError(numberInput, 'Ingrese una opción');
    }
    else { valid = true; }
    return valid
}

const isEmpty = (value) => value === '';

const showError = (input, message) => {
    const form = input.parentElement;
    form.classList.remove('success')
    form.classList.add('error')
    const error = form.querySelector("small");
    error.textContent = message;
  }

  pizzaForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const isCheckChoiceValid = checkChoice();
  
  
    console.log(isCheckChoiceValid)
    
    
    const isFormValid = isCheckChoiceValid;
    
    if(isFormValid) {
      form.submit();
    }
  })

*********************************************************************************/






/* 
let pizzasList = JSON.parse(localStorage.getItem('pizzas')) || [];
const saveLocalStorage = (pizzasList) => {
    localStorage.setItem('pizzas', JSON.stringify(pizzasList))
}

*/


/* ENTREGA 2 */

const checkChoice = (numberInput) => {
    let valid = false;
    const choiceValue = numberInput;
    if (isEmpty(choiceValue)) {
        showError(numberInput, 'Ingrese una opción');
    } else if (!NumberValid(choiceValue)) {
        showError(numberInput, 'La opción es incorrecta, elija un número del 1 al 6');
    } else {
        valid = true;
    }
    return valid
}

const isEmpty = (value) => value == '';

const NumberValid = (choice) => choice <= pizzas.length && choice >= 1; 

const showError = (input, message) => {;
    document.querySelector('.msjError').innerHTML= message;
}

document.getElementById('form').addEventListener('submit', validar);

function validar(evt) {
    evt.preventDefault();
    let numberInput = document.getElementById('choice').value;
    const isChoiceValid = checkChoice(numberInput);
    const isFormValid = isChoiceValid
    if (isFormValid) {
        form.submit();
        const pizzaCh = pizzas.filter(pizza => pizza.id == numberInput);
        document.getElementById('msjContainer').innerHTML = pizzaCh.map(showMsj).join(''); 
            }
}

const showMsj = (pizza) =>
      
     `
         <div >
           <h1>${pizza.nombre}</h1>
           <h3>${pizza.precio}</h3>
           </div>     
       `;
 
/*

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isChoiceValid = checkChoice();

    const isFormValid = isChoiceValid
    if (isFormValid) {
        form.submit();
        const pizzaCh = pizzas.filter(pizza => pizza.id == 3); //TEST
        console.log(`${pizzaCh.lenght}`);
        document.msjContainer.innerHTML = pizzaCh.map(showMsj).join('');      
    }
})
*/

/*
const renderMsj = () => {
    msjContainer.innerHTML = pizzas.map(showMsj).join('');
}
*/

