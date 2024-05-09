const pathBoyaca = document.querySelector('#COBOY');
const pathCundinamarca = document.querySelector('#COCUN2');
const infoBoyaca = document.querySelector('.info-boyaca');
const infoCundinamarca = document.querySelector('.info-cundinamarca');


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