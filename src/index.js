"use strict";

const fibonacci = () => {
  const resultado = [];

  let ant = 1;
  let numero = 0;

  while (numero <= 350) {
    resultado.push(numero);
    let aux = ant;
    ant = numero;
    numero = aux + ant;
  }

  return resultado;
};

const isFibonnaci = (num) => {
  return fibonacci().includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
