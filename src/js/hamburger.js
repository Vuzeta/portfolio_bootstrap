export const toggleHamburger = menu => {
  menu.classList.toggle('is-active');
  showNavList();
};

export const showNavList = () => {
  const nav = document.querySelector('.navigation__menu');
  nav.classList.toggle('navigation__menu--active');
};

export const linkClicked = () => {
  const hamburger = document.querySelector('.hamburger');
  toggleHamburger(hamburger);
};
