const d =  document
let containerCards = d.querySelector('.container-cards')

    async function getDataJson() {
      const url = 'datos.json'
      const res = await  fetch(url);
      const dataJson = await res.json();
      return dataJson
    }

  

 async function FilterDataJson() {
      let data = await getDataJson()
      for(let especie of data) {
          let habitatLoweCase = especie.Habitat.toLowerCase();
          let textFilter = habitatLoweCase.includes('boyac') 
          if(textFilter) {
            let  cardHtml = `
                <div class="card">
                  <div class="front-card">
                    <img src="${especie.Imagen}" alt="foto uñakusma">
                    <div class="container-dates">
                      <h3>${especie.Nombre_Comun}</h3>
                      <hr>
                      <p><em> ${especie.Nombre_Cientifico}</em></p>
                    </div>
                  </div>

                  <div class="back-card" >
                  <h3>Boyacá</h3>
                  <p>Nombre comun: <span> ${especie.Nombre_Comun}</span> </p>
                  <p>Nombre cientifico: <span> <em> ${especie.Nombre_Cientifico}  </em> </span> </p>
                  <p>Especie : <span> ${especie.Tipo} </span> </p>
                  <p>Ubicación: <span> ${especie.Habitat} </span>   </p>
                  <p>Latitud : <span>  ${especie.Latitud} </span>  </p>
                  <p>Longitud : <span> ${especie.Longitud} </span> </p>
                  <a target='_blank' href="${especie.direccion_web}"> 
                    <div class="btn-see-more">
                      <span> Ver mas </span>
                      <i class="bi bi-arrow-right"></i>
                    </div>
                  </a>
                  
                </div>
            </div>
            `
            containerCards.innerHTML += cardHtml
          }
      }
  }

d.addEventListener('DOMContentLoaded' , (e) => {
  FilterDataJson()
})