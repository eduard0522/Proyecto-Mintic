



// Consume los datos del archivo Json.
export async function getDataJson() {
  try {
    const url = 'datos.json'
    const res = await  fetch(url);
    const dataJson = await res.json();
    
    return dataJson
  } catch (error) {
    return null
  }
}


// Datos representados en el filtro de los grupos.

export const descripcions = {
  "animales" :{
    title : "Animales de colombia",
    text :"Colombia es un país con una biodiversidad excepcional, y las regiones de Boyacá y Cundinamarca no son la excepción. En estas áreas andinas se encuentran diversos ecosistemas que albergan una rica fauna. Entre los animales más destacados se encuentran el oso de anteojos, un símbolo de los páramos, y el cóndor de los Andes, majestuosa ave que sobrevuela los cielos montañosos. También es común encontrar especies como el venado de cola blanca y el tigrillo, ambos adaptados a los variados paisajes de la región. Además, los ríos y lagunas de estas zonas son hábitats importantes para una gran variedad de anfibios y aves acuáticas, resaltando la importancia de conservar estos ambientes naturales.",
  },
  
  "paisajes" :{
    title : "Paisajes de Boyacá y Cundinamarca.",
    text :"Las regiones de Boyacá y Cundinamarca en Colombia son ricas en diversidad vegetal, gracias a sus variados climas y altitudes. En los páramos, se destacan plantas como el frailejón, fundamental para la regulación hídrica de la zona, y el puya, con sus impresionantes flores. En las áreas montañosas, es común encontrar bosques de encenillo y roble andino, que ofrecen hábitat a numerosas especies de fauna. Además, la vegetación de las tierras bajas incluye una variedad de helechos, orquídeas y bromelias, que adornan los bosques con sus colores y formas únicas. Estas plantas no solo son esenciales para el equilibrio ecológico, sino que también tienen un valor cultural y medicinal importante para las comunidades locales.",
  },

  "plantas" :{
    title : "Plantas en colombia",
    text :"Las regiones de Boyacá y Cundinamarca en Colombia son ricas en diversidad vegetal, gracias a sus variados climas y altitudes. En los páramos, se destacan plantas como el frailejón, fundamental para la regulación hídrica de la zona, y el puya, con sus impresionantes flores. En las áreas montañosas, es común encontrar bosques de encenillo y roble andino, que ofrecen hábitat a numerosas especies de fauna. Además, la vegetación de las tierras bajas incluye una variedad de helechos, orquídeas y bromelias, que adornan los bosques con sus colores y formas únicas. Estas plantas no solo son esenciales para el equilibrio ecológico, sino que también tienen un valor cultural y medicinal importante para las comunidades locales.",
  }
 }