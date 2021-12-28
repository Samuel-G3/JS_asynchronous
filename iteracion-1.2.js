// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io';

const button$$ = document.querySelector('[data-function="boton"]');
const url = "https://api.nationalize.io";

const consult = (eve) => {
  const inputManual$$ = document.querySelector('[data-function="manual"]');

  fetch(url + "?name=" + inputManual$$.value)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

button$$.addEventListener("click", consult);
 