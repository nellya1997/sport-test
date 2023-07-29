
const accordions = document.querySelectorAll('.services__accordion')

accordions.forEach(accordion => {
	const mini = accordion.querySelector('.services__mini')
	const span = accordion.querySelector('span')

	mini.addEventListener('click', () => {
		accordion.classList.toggle('open')
		span.classList.toggle('rotate')
		const content = accordion.querySelector('.services__content')

		if (accordion.classList.contains('open')) {
			content.style.maxHeight = content.scrollHeight + 'px'
			content.style.opacity = '1'
		} else {
			content.style.maxHeight = '0'
			content.style.opacity = '0'
		}
	})

	span.addEventListener('click', event => {
		event.stopPropagation()
		mini.click()
	})
})
