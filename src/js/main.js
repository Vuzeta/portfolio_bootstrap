import '../scss/main.scss';
import { toggleHamburger, linkClicked } from './hamburger';
import initProjects from './projectsList';
import initTech from './technologiesList';

window.addEventListener('DOMContentLoaded', () => {
	initProjects();
	initTech();
});

const hamburger = document.querySelector('.hamburger');
const links = document.querySelectorAll('.navigation__link');

hamburger.addEventListener('click', function() {
	toggleHamburger(this);
});

links.forEach(link => link.addEventListener('click', linkClicked));

function importAll(r) {
	r.keys().forEach(r);
}
importAll(require.context('../assets/', true, /\.(png|jpe?g|svg)$/));
