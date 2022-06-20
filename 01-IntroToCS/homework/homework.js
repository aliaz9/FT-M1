'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  arrayBinario = [128, 64, 32, 16, 8, 4, 2, 0]
  decimal = 0;
  // Ejemplo> 0 1 0 0 1 0 0 1

  for (let i = 0; i < 7; i++) {

      decimal = decimal + num[i] * arrayBinario[j];
      arrayBinario[j]++

  }

}


function BinarioADecimal(num) {
  // tu codigo aca

  decimal = 0;
  // Ejemplo> 0 1 0 0 1 0 0 1

  for (let i = 0; i < 7; i++) {

      decimal = decimal + num[i] * 2 * num.length - i ;

  }

}



function DecimalABinario(num) {
  // tu codigo aca

  arrayBinario = [];
  nuevoNum = 0;

  while (num >= 2) {

    arrayBinario.push(num % 2);
    nuevoNum = Math.floor(num / 2);

  }

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,


  
}