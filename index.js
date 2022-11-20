import { getResistorOhms } from './resistor.js';


const bands = {
    color1: 'red',
    color2: 'green',
    multiplier: 'violet',
    tolerance: 'gold',
}


const calc = document.querySelector('.calculator');

calc.addEventListener("click", (evt) => {
  const target = evt.target;
  const classList = evt.target.classList;
  const parent = evt.target.parentElement.id;
  const bandOne = document.querySelector('#b0');
  const bandTwo = document.querySelector('#b1');
  const bandThree = document.querySelector('#b2');
  const bandFour = document.querySelector('#b3');
  if(parent === 'color0'){
    bands.color1 = classList[1];
    bandOne.setAttribute("class", `band ${bands.color1}`);
  }
  else if (parent === 'color1') {
    bands.color2 = classList[1];
    bandTwo.setAttribute("class", `band ${bands.color2}`);
  }
  else if (parent === 'color2') {
    bands.multiplier = classList[1];
    bandThree.setAttribute("class", `band ${bands.multiplier}`);
  }
  else if (parent === 'color3') {
    bands.tolerance = classList[1];
    bandFour.setAttribute("class", `band ${bands.tolerance}`);
  }
  const getValue = getResistorOhms(bands);
  document.querySelector(".answer").innerText = getValue;
});
