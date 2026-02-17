
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: '#00b4d8' },       /* cor das partículas */
    shape: { type: 'circle' },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.0, sync: false }
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
        enable: true,
        distance: 150,
        color: '#0077b6',   // azul mais escuro
        opacity: 0.8,       // era 0.3 — muito mais visível
        width: 2            // era 1 — linha mais grossa
      },
      
    move: {
      enable: true,
      speed: 2,                        /* velocidade suave igual ao original */
      direction: 'none',
      random: true,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },   /* mouse aproxima linhas */
      onclick:  { enable: true, mode: 'push' },  /* clique adiciona partículas */
      resize: true
    },
    modes: {
      grab:    { distance: 180, line_linked: { opacity: 0.7 } },
      push:    { particles_nb: 4 },
      repulse: { distance: 100 }
    }
  },
  retina_detect: true
});





// BOTÃO VEJA MAIS - PROJETOS
const ButtonSeeMore = document.getElementById('see-more')
const hideDiv = document.getElementById('hide-content')

ButtonSeeMore.addEventListener('click', () => {
    hideDiv.classList.toggle('show');
    if (hideDiv.classList.contains('show')) {
        ButtonSeeMore.innerHTML = 'Ver menos';
        ButtonSeeMore.style.backgroundColor = '#D62828';
    } else {
        ButtonSeeMore.innerHTML = 'Ver mais';
        ButtonSeeMore.style.backgroundColor = '#FCBF49';
    }
});


// MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function () {
    const hamburguer = document.querySelector('.hamburguer');
    const navMenu = document.querySelector('.nav-menu');

    hamburguer.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});


const lamp = document.querySelector('.lamp');
const containerLamp = document.querySelector('.cta');
const textLamps = document.querySelectorAll('.txt-cta');
const moon = document.querySelector('.switch');
const moonImage = document.getElementById('moonImage');


//LAMPADA - CTA
function toggleLamp() {
    containerLamp.classList.toggle('active');
    textLamps.forEach(textLamp => {
        textLamp.classList.toggle('active');
    });

    if (containerLamp.classList.contains('active')) {
        lamp.src = './assets/icons/dark-lamp.svg';
    } else {
        lamp.src = './assets/icons/light_lamp.svg'; 
    }
}
lamp.addEventListener('click', toggleLamp);

//DARK MODE
moon.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark-mode');
        toggleLamp();
        toggleMoonImage(); 
 
    });

// LUA - DARK/LIGHT MODE
function toggleMoonImage() {
    if (document.documentElement.classList.contains('dark-mode')) {
        moonImage.src = './assets/icons/light-moon.svg'; 
    } else {
        moonImage.src = './assets/icons/moon.svg'; 
    }
}


