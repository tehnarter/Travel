document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.nav').classList.toggle('open')
})
// Функція для відслідковування змін розміру вікна
function handleWindowSizeChange() {
	// Перевірка розміру екрану
	if (window.matchMedia('(max-width: 768px)').matches) {
		// Виконання коду тільки для розширення екрану 768px і більше
		addClickHandlers()
	} else {
		// Видалення обробників подій, якщо розмір екрану не відповідає умові
		removeClickHandlers()
	}
}

// Функція для додавання обробників подій click
function addClickHandlers() {
	document.querySelectorAll('.header__list').forEach(function (item) {
		item.addEventListener('click', toggleMenu)
	})
}

// Функція для видалення обробників подій click
function removeClickHandlers() {
	document.querySelectorAll('.header__list').forEach(function (item) {
		item.removeEventListener('click', toggleMenu)
	})
}

// Функція для відкриття/закриття меню
function toggleMenu() {
	document.querySelector('.burger').classList.toggle('active')
	document.querySelector('.nav').classList.toggle('open')
}

// Виклик функції для перевірки розміру вікна при завантаженні сторінки
handleWindowSizeChange()

// Додавання слухача події для відслідковування змін розміру вікна
window.addEventListener('resize', handleWindowSizeChange)
