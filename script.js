$(document).ready(function () {
  
    $('.switcher').on('click', function(e) {
      e.preventDefault();
      $('.screen').toggleClass('glitch');
    });

  });

function handleClick(event) {
  url = 'https://github.com/CNPC03'
  event.preventDefault();
  document.body.classList.add('blackout');
  setTimeout(function() {
    window.location.href = url;
  }, 500); // Atraso de 0.5 segundos para a transição
}