import '../scss/main.scss';
import { toggleHamburger, linkClicked } from './hamburger';

const hamburger = document.querySelector('.hamburger');
const links = document.querySelectorAll('.navigation__link');

hamburger.addEventListener('click', function() {
  toggleHamburger(this);
});

links.forEach(link => link.addEventListener('click', linkClicked));
