import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000, // Velocidad del scroll
  offset: 0, // Desplazamiento desde el topo
  easing: 'easeInOutCubic', // Efecto de transición
  speedAsDuration: true, // Velocidad como duración
  preventDefault: true, // Evitar el comportamiento predeterminado

});