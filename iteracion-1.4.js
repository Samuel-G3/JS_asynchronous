// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.

const url = "https://api.nationalize.io";

const search = (event) => {
  input$$ = document.querySelector("input");
  fetch(url + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((person) => {
      infoPerson(person);
    });
};

const infoPerson = (person) => {
 
  let text = `El nombre ${person.name} tiene`;

  for (const country of person.country) {
    const percent = Math.floor(country.probability * 100);
    text += `un ${percent}% de ser de ${country.country_id}.`;
  }

const p$$ = document.createElement("p");
const div$$ = document.createElement("div");
const btnDelete$$ = document.createElement("button");

p$$.textContent = text;
btnDelete$$.innerHTML = 'X';

div$$.appendChild(p$$);
div$$.appendChild(btnDelete$$);

btnDelete$$.addEventListener('click', ()=>{
    deleteP(div$$);
}) ;

document.body.appendChild(div$$);

};
 
const deleteP = (delete$) => {
    delete$.remove();
}



const button$$ = document.querySelector("button");
button$$.addEventListener("click", search);

 

 