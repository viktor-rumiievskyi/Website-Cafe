const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", this.window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	nav.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	nav.classList.remove('open');
};

const sr = ScrollReveal ({
	distance: '60px',
	duration: 2500,
	reset: true
});

sr.reveal('.home-text', {delay:200, origin:'left'})
sr.reveal('.home-img', {delay:200, origin:'right'})

sr.reveal('.container, .about, .menu, .contact', {delay:200, origin:'bottom'})