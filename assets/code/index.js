const pathBoyaca = document.querySelector('#COBOY');
const pathCundinamarca = document.querySelector('#COCUN2');
const infoBoyaca = document.querySelector('.info-boyaca');
const infoCundinamarca = document.querySelector('.info-cundinamarca');



// Muestra la información de la región al pasar el mouse por el mapa.

pathBoyaca.addEventListener('mouseover', () => {
  if(screen.width > 1024){
    infoBoyaca.style.display = 'block';
    infoBoyaca.style.opacity = 1;
  }
  
});

pathCundinamarca.addEventListener('mouseover', () => {
  if(window.screen.width > 1024){
    infoCundinamarca.style.display = 'block';
    infoCundinamarca.style.opacity = 1;
  }
});

pathCundinamarca.addEventListener('mouseout', () => {
infoCundinamarca.style.display = 'none';
infoCundinamarca.style.opacity = 0;
});

pathBoyaca.addEventListener('mouseout', () => {
  infoBoyaca.style.display = 'none';
  infoBoyaca.style.opacity = 0;
});






// Escuchadores de eventos

document.addEventListener('click', (e) => {
  if(e.target.matches('.boyaca-btn')){
    location.href = 'boyaca.html'
  }
})

document.addEventListener('click', (e) => {
  if(e.target.matches('.cundinamarca-btn')){
    location.href = 'cundinamarca.html'
  }
  if(e.target.matches('.toggleMenu')){
    document.querySelector('.nav-menu').classList.toggle('active');
  }
  if(e.target.matches('.closeMenu')){
    document.querySelector('.nav-menu').classList.toggle('active');
  }

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



