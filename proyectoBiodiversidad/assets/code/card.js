export function  cardHtml(especie) {
  return (
  `
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
      <h3>${especie.Habitat}</h3>
      <p>Nombre comun: <span> ${especie.Nombre_Comun}</span> </p>
      <p>Nombre cientifico: <span> <em> ${especie.Nombre_Cientifico}  </em> </span> </p>
      <p>Especie : <span> ${especie.Tipo} </span> </p>
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
  )}