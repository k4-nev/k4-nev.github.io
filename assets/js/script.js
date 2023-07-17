/* Основной файл скрипта JS */
const chevron = document.querySelector('.nav__chevron'),
    close = document.querySelector('.nav__chevron--active'),
    sidebar = document.querySelector('.sidebar'),
    overlay = document.querySelector('.overlay'),

    percent = document.querySelectorAll('.skills__percent'),
    lines = document.querySelectorAll('.skills__line span');

chevron.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--active'),
    chevron.classList.toggle('nav__chevron--active');
    overlay.classList.toggle('overlay--active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--active'),
    chevron.classList.toggle('nav__chevron--active');
    overlay.classList.toggle('overlay--active');
});

(function (){
    var a = document.querySelectorAll('.nav__list a');
      for (var i=a.length; i--;) {
        if (a[i].href === window.location.pathname || a[i].href === window.location.href) a[i].className += ' nav__link--active';
      }
  })();

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

