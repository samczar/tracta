const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
// const menuBranding = document.querySelector('.btn-branding')

const navItems = document.querySelectorAll('.nav-item')

let showMenu = false

const toggleMenu = () => {
	if (!showMenu) {
		menuBtn.classList.add('close')
		menu.classList.add('show')
		menuNav.classList.add('show')
		// menuBranding.classList.add('show')
		navItems.forEach(item => {
			item.classList.add('show')
		})

		showMenu = true
	} else {
		menuBtn.classList.remove('close')
		menu.classList.remove('show')
		menuNav.classList.remove('show')
		// menuBranding.classList.remove('show')
		navItems.forEach(item => {
			item.classList.remove('show')
		})

		showMenu = false
	}
}
menuBtn.addEventListener('click', toggleMenu)

anime.timeline({ loop: false }).add({
	targets: '.large-heading .word',
	scale: [14, 1],
	opacity: [0, 1],
	easing: 'easeOutCirc',
	duration: 800,
	delay: (el, i) => 800 * i
})

anime
	.timeline({ loop: false })
	.add({
		targets: '.heading .small-heading',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 0],
		easing: 'easeOutExpo',
		duration: 1400,
		delay: (el, i) => 300 + 30 * i
	})
	.add({
		targets: '.heading .small-heading',
		translateY: [0, -30],
		opacity: [0, 1],
		easing: 'easeInExpo',
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	})

anime
	.timeline({ loop: false })
	.add({
		targets: '.heading ',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [1, 1],
		easing: 'easeOutExpo',
		duration: 1400,
		delay: (el, i) => 300 + 30 * i
	})
	.add({
		targets: '.heading',
		translateY: [0, -30],
		opacity: [1, 1],
		easing: 'easeInExpo',
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	})
