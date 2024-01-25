/* Основной файл скрипта JS */
'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const chevron = document.querySelector('.nav__chevron'),
		close = document.querySelector('.nav__chevron--active'),
		sidebar = document.querySelector('.sidebar'),
		overlay = document.querySelector('.overlay'),
		percent = document.querySelectorAll('.skills__percent'),
		lines = document.querySelectorAll('.skills__line span'),
		navLink = document.querySelectorAll('.nav__list a');

	chevron.addEventListener('click', () => {
		sidebar.classList.toggle('sidebar--active');
		chevron.classList.toggle('nav__chevron--active');
		overlay.classList.toggle('overlay--active');
	});

	overlay.addEventListener('click', () => {
		sidebar.classList.toggle('sidebar--active');
		chevron.classList.toggle('nav__chevron--active');
		overlay.classList.toggle('overlay--active');
	});

	navLink.forEach((item) => {
		if (item.href === window.location.pathname || item.href === window.location.href) {
			item.className += ' nav__link--active';
		} else if (window.location.pathname == '/index.html') {
			navLink[0].className += ' nav__link--active';
		}
	})

	percent.forEach((item, i) => {
		lines[i].style.width = item.innerHTML;
	});
});
