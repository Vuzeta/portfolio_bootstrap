import '../scss/main.scss';
import { toggleHamburger, linkClicked } from './hamburger';
import Project from './project';

const hamburger = document.querySelector('.hamburger');
const links = document.querySelectorAll('.navigation__link');

hamburger.addEventListener('click', function() {
  toggleHamburger(this);
});

links.forEach(link => link.addEventListener('click', linkClicked));

const project1 = new Project({
  title: 'Tytuł',
  tech: 'HTML5, CSS3',
  img: 'project.jpg',
  desc:
    'Aplikacja Movie_Library została stworzona w ramach ćwiczeń z React-Router-DOM jak i z samym Reactem. Do pobierania danych z TMDb posłużyłem się biblioteką "Axios". Dane są kategoryzowane, wyświetlana jest lista filmów. Możemy otworzyć daną kartę filmu i otrzymać informacje na temat filmu, reżyserii, aktorów,rankingu, możemy oglądnąć trailer jak i dodać sam film do listy ulubionych poprzez kliknięcie serduszka.',
  // linkLive: '',
  // linkCode: '',
  rootElement: document.querySelector('.projects__wrapper'),
});

const project2 = new Project({
  title: 'Tytuł',
  tech: 'HTML5, CSS3',
  img: 'project.jpg',
  desc:
    'Aplikacja "Manager" służy do zarządzania pracownikami. W aplikacji możemy w prosty sposób dodawać i modyfikować pracowników, uzyskiwać dostęp do danych, dodawać dzień, w którym pracownik był w pracy, monitorować zarobki oraz otrzymywać wykres dni w formie diagramu.',
  // linkLive: '',
  // linkCode: '',
  rootElement: document.querySelector('.projects__wrapper'),
});

const project3 = new Project({
  title: 'Tytuł',
  tech: 'HTML5, CSS3',
  img: 'project.jpg',
  desc:
    'Projekt "Witcher Clock" urodził się po przejściu gry Wiedźmin 3. Projekt nie miał większego celu, lecz dał możliwość poprawienia umiejętności z obiektem Date oraz samymi transformacjami w CSS.',
  // linkLive: '',
  // linkCode: '',
  rootElement: document.querySelector('.projects__wrapper'),
});
