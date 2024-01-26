/* Основной файл скрипта JS */
'use strict';

window.addEventListener('DOMContentLoaded', () => {
	const chevron = document.querySelector('.nav__chevron'),
		close = document.querySelector('.nav__chevron--active'),
		sidebar = document.querySelector('.sidebar'),
		overlay = document.querySelector('.overlay'),
		contentDiv = document.querySelector('.content'),
		/* percent = document.querySelectorAll('.skills__percent'),
		lines = document.querySelectorAll('.skills__line span'), */
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

	function loadPage (url) {

		fetch(url)
			.then(response => response.text())
			.then(html => {
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, 'text/html');
				const newContent = doc.querySelector('.content').innerHTML;

				contentDiv.classList.add('fadeOut');
				contentDiv.innerHTML = newContent;
				document.title = doc.title;

				history.pushState({}, '', url);
				contentDiv.classList.remove('fadeOut');
			});
	}

	navLink.forEach(item => {
		item.addEventListener('click', (event) => {
			event.preventDefault();

			const url = event.currentTarget.getAttribute('href');
			loadPage(url);

			navLink.forEach((item) => {
				item.classList.remove('nav__link--active');
			})

			item.classList.add('nav__link--active');
		});
	})

	navLink.forEach((item) => {
		if (item.href === window.location.pathname || item.href === window.location.href) {
			item.classList.add('nav__link--active');
		}
	})

	/* function uploadPercentSkils() {
		percent.forEach((item, i) => {
			lines[i].style.width = item.innerHTML;
		});
	}
	uploadPercentSkils(); */
});
