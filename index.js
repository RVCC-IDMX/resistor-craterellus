// import { getResistorOhms } from './resistor.js';

const meep = document.querySelector('#color0 .black');
meep.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
  }

const calc = document.querySelector('.calculator');

calc.addEventListener("click", (evt) => {
    const target = evt.target;
    const classList = evt.target.classList;
    console.log(classList)
    const parent = evt.target.parentElement;
});