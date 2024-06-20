import { getDataJson } from "./peticiones.js";
import { cardHtml } from "./card.js";
const d =  document
let containerCards = d.querySelector('.container-cards')

async function FilterDataJson() {
  try {
    let data = await getDataJson()
      for(let especie of data) {
          let habitatLoweCase = especie.Habitat.toLowerCase();
          let textFilter = habitatLoweCase.includes('boyac') 
          if(textFilter) {
            containerCards.innerHTML += cardHtml(especie)
          }
      }
  } catch (error) {
    containerCards.innerHTML = "<h2> Lo sentimos, ocurrio un error al obtener los datos. </h2>"
  }     
}


d.addEventListener('DOMContentLoaded' , (e) => {
  FilterDataJson()
})


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
})

