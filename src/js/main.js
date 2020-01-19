import '../scss/main.scss';
import { toggleHamburger, linkClicked } from './hamburger';
import initProjects from './projectsList';
import initTech from './technologiesList';
import changeColor from './changeNavColor';

const hamburger = document.querySelector('.hamburger');
const links = document.querySelectorAll('.navigation__link');

window.addEventListener('DOMContentLoaded', () => {
  initProjects();
  initTech();
});
window.addEventListener('scroll', changeColor);

hamburger.addEventListener('click', function() {
  toggleHamburger(this);
});

links.forEach(link => link.addEventListener('click', e => linkClicked(e)));

function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../assets/', true, /\.(png|jpe?g|svg)$/));
