const pizzas = [
    {
        id: 1,
        nombre: "Fugazeta",
        ingredientes: ["muza", " cebolla"],
        precio: 500,
        imagen: "./images/fugazzeta.jpg",
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["muza", " tomate", " albahaca"],
        precio: 700,
        imagen: "./images/napolitana.jpg",
    },
    {
        id: 3,
        nombre: "Cuatro Quesos",
        ingredientes: ["muza", " roquefort", " provolone", " gouda"],
        precio: 1000,
        imagen: "./images/cuatroquesos.jpg",
    },
    {
        id: 4,
        nombre: "Morrón con Jamón",
        ingredientes: ["muza", " morrón", " jamón"],
        precio: 1000,
        imagen: "./images/morron_jamon.jpg",
    },
    {
        id: 5,
        nombre: "Hongos",
        ingredientes: ["muza", " cebolla", " hongos"],
        precio: 1200,
        imagen: "./images/hongos.jpg",
    },
    {
        id: 6,
        nombre: "Huevo",
        ingredientes: ["muza", " cebolla", " salchicha", " huevo"],
        precio: 1300,
        imagen: "./images/huevo.jpg",
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


/* ENTREGA 3 */

const formulario = document.getElementById('form');
const ultimaPizza = JSON.parse(localStorage.getItem('pizza') || "[]")[0];
console.log(ultimaPizza)
if (!ultimaPizza) {
    document.getElementById('msjPizza').innerHTML =
    '<small class="msjErrorI">Hasta ahora no ha seleccionado ninguna pizza. Elija un número del 1 al 6...</small>';
}
else {
    document.getElementById('msjPizza').innerHTML =

        `
     <p>La última pizza seleccionada fue ...</p>
     <div class="msjUltPizza" >
           <h2>${ultimaPizza.nombre}</h1>
           <h4>$${ultimaPizza.precio}</h3>
           <h5>Esta pizza viene con ${ultimaPizza.ingredientes}</h4>
           <img id="myImgU" src="${ultimaPizza.imagen}" >
           </div>
               `;
}
const checkChoice = (numberInput) => {
    let valid = false;
    const choiceValue = numberInput;
    if (isEmpty(choiceValue)) {
        showError(numberInput, '<small class="msjError">Elija un número</small>');
    } else if (!NumberValid(choiceValue)) {
        showError(numberInput, '<small class="msjError">La opción es incorrecta, elija un número del 1 al 6</small>');
    } else {
        valid = true;
    }
    return valid
}

const isEmpty = (value) => value == '';

const NumberValid = (choice) => choice <= pizzas.length && choice >= 1;

const showError = (input, message) => {
    ;
    document.getElementById('msjPizza').innerHTML = message;
}

formulario.addEventListener('submit', validar);

function validar(evt) {

    evt.preventDefault();

    let numberInput = document.getElementById('choice').value;
    const isChoiceValid = checkChoice(numberInput);
    const isFormValid = isChoiceValid
    if (isFormValid) {
        const pizzaCh = pizzas.filter(pizza => pizza.id == numberInput);
        document.getElementById('msjPizza').innerHTML = pizzaCh.map(showMsj).join('');
        localStorage.setItem('pizza', JSON.stringify(pizzaCh));
    }
    formulario.reset();
}

const showMsj = (pizza) =>
    `
         <img id="myImg" src="${pizza.imagen}" >
           <h1>- ${pizza.nombre} -</h1>
           <h3>$${pizza.precio}</h3>
           <h4>Esta pizza viene con ${pizza.ingredientes}</h4>
           
    `;


