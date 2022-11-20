import { getResistorOhms } from './resistor.js';


const bands = {
    color1: 'red',
    color2: 'green',
    multiplier: 'violet',
    tolerance: 'gold',
}


// const meep = document.querySelector('#color0 .black');
// meep.addEventListener("click", myFunction);

// function myFunction() {
//     alert ("Hello World!");
//   }

const calc = document.querySelector('.calculator');

calc.addEventListener("click", (evt) => {
  const target = evt.target;
  const classList = evt.target.classList;
  const parent = evt.target.parentElement.id;
  if(parent === 'color0'){
  bands.color1 = classList[1];
  }
  else if (parent === 'color1') {
    bands.color2 = classList[1];
  }
  else if (parent === 'color2') {
    bands.multiplier = classList[1];
  }
  else if (parent === 'color3') {
    bands.tolerance = classList[1];
  }
  console.log(bands);
  const getValue = getResistorOhms(bands);
  console.log(getValue);
});


// const getValue = getResistorOhms(bands);
// console.log(getValue);


// const color1 = document.querySelector('#color0');

// color1.addEventListener("click", (evt) => {
  // console.log(evt);
//     const target = evt.target;
//     const classList = evt.target.classList;
    // console.log(classList)
    // console.log(classList[1])
//   const parent = evt.target.parentElement;
//   console.log(parent);
// });