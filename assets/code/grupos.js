import { getDataJson } from "./peticiones.js";
import { descripcions } from "./peticiones.js";
import { cardHtml } from "./card.js";

const d = document;
const titleDescripcion = d.querySelector('.title-descripcion');
const textDescripcion = d.querySelector('.text-descripcion');
let containerCards = d.querySelector('.container-cards')



// Filtra los datos, recibe un lista como parametro y devuelve los datos que coincidan.

const filterData = async (filtro) => {
    const data = await  getDataJson()
    let filter = data.filter((dato) => {
      let tipeLower =  dato.Tipo.toLowerCase()
      if(filtro.includes(tipeLower)) return  dato
    });
  insertHtml(filter)
 }



 // Inserta los datos filtrados al DOM
 async function insertHtml(data) {
  if(data.length === 0){
    containerCards.innerHTML = "<h2> Lo sentimos, por el momento no tenemos información  disponible. </h2>"
  }
  for(let especie of data) {
        containerCards.innerHTML += cardHtml(especie)
  }
}



d.addEventListener('DOMContentLoaded', async () => {
  const filtro = localStorage.getItem("filtro");
  if(filtro == "animal" ){
    const filter = ["ave", "mariposa","mamifero","reptil","anfibio"]
    textDescripcion.innerText = descripcions.animales.text
    titleDescripcion.innerText = descripcions.animales.title
    return await filterData(filter);
  }
  if(filtro === "paisaje"){
    textDescripcion.innerText = descripcions.paisajes.text
    titleDescripcion.innerText = descripcions.paisajes.title
    const filter = ["paisaje"]
    return await filterData(filter);
  }
  if(filtro === "flora"){
    textDescripcion.innerText = descripcions.plantas.text
    titleDescripcion.innerText = descripcions.plantas.title
    const filter = ["flora","hongo"]
    return await filterData(filter);
  }

});



d.addEventListener("click" , (e) => {
  if(e.target.matches('.paisajes')){
    localStorage.setItem('filtro', 'paisaje')
    location.href  = "./grupos.html"
  }
  if(e.target.matches('.plantas')){
    localStorage.setItem('filtro', 'flora')
    location.href  = "./grupos.html"
  }

  if(e.target.matches('.animales')){
    localStorage.setItem('filtro', 'animal')
    location.href  = "./grupos.html"
  }
});
