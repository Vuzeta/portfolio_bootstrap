!function(e){var t={};function i(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=32)}([function(e,t,i){},function(e,t,i){var o={"./avocode_icon.svg":2,"./bootstrap_icon.svg":3,"./coeluso_image.jpg":4,"./css_icon.svg":5,"./dent_image.jpg":6,"./digital_image.jpg":7,"./drink_image.jpg":8,"./english.svg":9,"./eudora_image.jpg":10,"./git_icon.svg":11,"./gulp_icon.svg":12,"./html_icon.svg":13,"./interactive_agency_image.jpg":14,"./invite_image.jpg":15,"./javascript_icon.svg":16,"./jira_icon.svg":17,"./jquery_icon.svg":18,"./manager_image.jpg":19,"./movie_library_image.jpg":20,"./myPhoto.jpg":21,"./npm_icon.svg":22,"./poland.svg":23,"./project.jpg":24,"./react_icon.svg":25,"./sass_icon.svg":26,"./todo_image.jpg":27,"./united-states.svg":28,"./weather_image.jpg":29,"./webpack_icon.svg":30,"./witcher_image.jpg":31};function a(e){var t=n(e);return i(t)}function n(e){if(!i.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id=1},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/avocode_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/bootstrap_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/coeluso_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/css_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/dent_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/digital_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/drink_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/english.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/eudora_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/git_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/gulp_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/html_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/interactive_agency_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/invite_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/javascript_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/jira_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/jquery_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/manager_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/movie_library_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/myPhoto.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/npm_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/poland.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/project.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/react_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/sass_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/todo_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/united-states.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/weather_image.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/webpack_icon.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/witcher_image.jpg"},function(e,t,i){"use strict";i.r(t);i(0);var o=function(e){e.classList.toggle("is-active"),a()},a=function(){document.querySelector(".navigation__menu").classList.toggle("navigation__menu--active")},n=function(){var e=document.querySelector(".hamburger");o(e)};function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var s=function e(t){var i=this,o=t.title,a=void 0===o?"Project":o,n=t.tech,s=void 0===n?"technologies":n,c=t.img,p=t.desc,l=void 0===p?"Description":p,u=t.linkToLive,d=void 0===u?"https://github.com/Vuzeta":u,m=t.linkToCode,g=void 0===m?"https://github.com/Vuzeta":m,w=t.rootElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"buildProject",(function(){var e=document.createElement("div");e.classList.add("project");var t=document.createElement("div");t.classList.add("project__header-wrapper");var o=document.createElement("h2");o.classList.add("project__title"),o.textContent=i.title;var a=document.createElement("p");a.classList.add("project__tech"),a.textContent=i.tech;var n=document.createElement("div");n.classList.add("project__icon-wrapper");var r=document.createElement("button");r.classList.add("project__btn"),r.addEventListener("click",i.showContent);var s=document.createElement("i");s.classList.add("fas","fa-chevron-down","project__icon","project__icon-show");var c=document.createElement("div");c.classList.add("project__image"),c.style.backgroundImage="url(assets/".concat(i.img,")");var p=document.createElement("div");p.classList.add("project__description-wrapper");var l=document.createElement("p");l.classList.add("project__description"),l.textContent=i.desc;var u=document.createElement("a");u.classList.add("project__link-icon"),u.target="_blank",u.href=i.linkToLive;var d=document.createElement("a");d.classList.add("project__link-icon"),d.target="_blank",d.href=i.linkToCode;var m=document.createElement("i");m.classList.add("fas","fa-desktop","project__icon","project__icon-desktop");var g=document.createElement("i");g.classList.add("fas","fa-code","project__icon","project__icon-code"),i.rootEl.appendChild(e),e.appendChild(t),t.appendChild(o),t.appendChild(a),e.appendChild(n),n.appendChild(r),r.appendChild(s),e.appendChild(c),e.appendChild(p),p.appendChild(l),p.appendChild(u),u.appendChild(m),p.appendChild(d),d.appendChild(g),i.initProjectHeight(e,t)})),r(this,"showContent",(function(e){var t=e.target,o=i.CalcOuterHightEl(t.parentNode.parentNode.querySelector(".project__header-wrapper")),a=i.CalcOuterHightEl(t.parentNode.parentNode.querySelector(".project__image")),n=i.CalcOuterHightEl(t.parentNode.parentNode.querySelector(".project__description-wrapper"));!1===i.show?(i.show=!i.show,t.classList.add("project__btn--active"),t.parentNode.parentNode.style.height="".concat(a+n+o,"px")):(i.show=!i.show,t.classList.remove("project__btn--active"),t.parentNode.parentNode.style.height="".concat(o,"px"))})),r(this,"CalcOuterHightEl",(function(e){var t=e.offsetHeight,i=getComputedStyle(e);return t+=parseInt(i.marginTop)+parseInt(i.marginBottom)})),r(this,"initProjectHeight",(function(e,t){var o=i.CalcOuterHightEl(t);e.style.height="".concat(o,"px")})),this.desc=l,this.img=c,this.tech=s,this.title=a,this.linkToLive=d,this.linkToCode=g,this.rootEl=w,this.show=!1,this.buildProject()},c=function(){new s({title:"Movie Library",tech:"React, React-Router, Sass, Axios, NPM",img:"movie_library_image.jpg",desc:'Aplikacja Movie_Library została stworzona w ramach ćwiczeń z React-Router-DOM jak i z samym Reactem. Do pobierania danych z TMDb posłużyłem się biblioteką "Axios". Dane są kategoryzowane, wyświetlana jest lista filmów. Możemy otworzyć daną kartę filmu i otrzymać informacje na temat filmu, reżyserii, aktorów,rankingu, możemy oglądnąć trailer jak i dodać sam film do listy ulubionych poprzez kliknięcie serduszka.',linkToLive:"https://vuzeta.github.io/Movie_Library",linkToCode:"https://github.com/Vuzeta/Movie_Library",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Manager",tech:"React, React-Router-DOM, NPM, GIT, Sass, materialize",img:"manager_image.jpg",desc:'Aplikacja "Manager" służy do zarządzania pracownikami. W aplikacji możemy w prosty sposób dodawać i modyfikować pracowników, uzyskiwać dostęp do danych, dodawać dzień, w którym pracownik był w pracy, monitorować zarobki oraz otrzymywać wykres dni w formie diagramu.',linkToLive:"https://vuzeta.github.io/Manager",linkToCode:"https://github.com/Vuzeta/Manager",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Drink",tech:"HTML5, CSS3, JavaScript, Fetch API, Webpack",img:"drink_image.jpg",desc:'Aplikacja "Drink" została stworzona na podstawie przeżyć z dawnej pracy. Często goście hotelowi prosili o stworzenie napoju opartego na wybranym przez nich składniku. Nie znając przepisów, aby zadowolić gościa zmuszony byłem przeszukiwać Internet w poszukiwaniu konkretnego napoju. Aplikacja ta ma na celu ułatwienie wyszukiwania napojów według nazwy lub składnika. Aplikacja wyszukuje napoje za pomocą darmowego API zwracając plik json, z którego następnie jest wyświetlana lista pasujących przedmiotów.',linkToLive:"https://vuzeta.github.io/Drink-API",linkToCode:"https://github.com/Vuzeta/Drink-API",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Dent Website",tech:"HTML5, CSS3, Javascript, Webpack, NPM, BEM",img:"dent_image.jpg",desc:"Projekt Dent Website został zaprojektowany w programie UXpin a następnie zakodowany na stronę WWW. Dent Website był projektowany podejściem Mobile First. Celem projektu było zbudować stronę w pełni responsywną na różne urządzenia. W projekcie nauczyłem się umieszczać video w strukturze html jak i operować jego właściwościami oraz utwaliłem umiejętności konfiguracji Webpack'a",linkToLive:"https://vuzeta.github.io/Dent_Website",linkToCode:"https://github.com/Vuzeta/Dent_Website",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Digital Agency",tech:"HTML5, CSS3, Javascript, Webpack, NPM",img:"digital_image.jpg",desc:"Tworząć projekt Digital Agency inspirowałem się projektem PSD z PSD Freebies.com. Projekt miał na celu powtórzenie umiejętności odnośnie Flexboxa, Grida, Responsywności, metodologii BEM oraz Webpacka.",linkToLive:"https://vuzeta.github.io/Digital_Agency",linkToCode:"https://github.com/Vuzeta/Digital_Agency/",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Coeluso",tech:"HTML, CSS, Scss, Javascript, Webpack",img:"coeluso_image.jpg",desc:"Projekt Ceoluso-Website został zaczerpnięty z darmowego szablonu na symu.co. Pocięcie szablonu, odpowiednie przygotowanie znaczników, oraz rozmieszczenie elementów na stronie. Stworzenie tej strony internetowej miało na celu poznanie pakietu Webpack od podstaw. W projekcie dowiedziałem się również czym jest Babel.js i jak go wykorzystać w projektach.",linkToLive:"https://vuzeta.github.io/Coeluso-Website",linkToCode:"https://github.com/Vuzeta/Coeluso-Website",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Interactive Agency",tech:"HTML5, CSS3, Sass, JavaScript, Gulp",img:"interactive_agency_image.jpg",desc:"Projekt Interactive Agency został zaczerpnięty z darmowego szablonu na symu.co. Projekt Interactive Agency miał na celu wykorzystanie motodologii BEM w projekcie oraz utrwalenie umiejętności projektowania z pliku PSD do HTML.",linkToLive:"https://vuzeta.github.io/Interactiveagency_psd_to_html",linkToCode:"https://github.com/Vuzeta/Interactiveagency_psd_to_html",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"React TODO List",tech:"React, CSS3, NPM, GIT",img:"todo_image.jpg",desc:"Głównym celem stworzenia tej aplikacji było poznanie środowiska create-react-app. Najpierw stworzenie samej struktury, następnie sposób wyświetlania danych, tworzenie metod usuwania i modyfikowania zadań, ustalanie priorytetów, obsługa pól w panelu, dodawanie zadań oraz sortowanie zadań. Projekt nauczył mnie innego sposobu budowania projektów SPA.",linkToLive:"https://vuzeta.github.io/React-todo-list",linkToCode:"https://github.com/Vuzeta/React-todo-list",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Invite",tech:"HTML5, CSS3, JavaScript",img:"invite_image.jpg",desc:'Aplikacja "Invite Party" została stworzona na podstawie kursu na platformie TeamTreeHouse. Aplikacja pomaga skomponować listę uczestników na róznego rodzaju wydarzenia. Jest to prosta aplikacja w której dodajemy osobę, zaznaczamy czy weźmie udział w wydarzeniu. Aplikacja daje nam także możliwość modyfikacji uczestnika.',linkToLive:"https://vuzeta.github.io/App-Invite-Party",linkToCode:"https://github.com/Vuzeta/App-Invite-Party",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Weather forecast",tech:"HTML5, CSS3, JavaScript, Ajax",img:"weather_image.jpg",desc:"Aplikacja powstała dzięki darmowemu API openweathermap.org , które rozpowszechnia dane pogodowe na całym świecie. Aplikacja działa na zasadzie wysyłanych requestów metodą AJAX, które w odpowiedzi zwraca plik JSON z, które wyciągane i wyświetlane zostają dane pogodowe w Celcjuszach na 5 kolejnych dni.",linkToLive:"https://vuzeta.github.io/Weather_API",linkToCode:"https://github.com/Vuzeta/Weather_API",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Witcher Clock",tech:"HTML5, CSS3, JavaScript",img:"witcher_image.jpg",desc:'Projekt "Witcher Clock" urodził się po przejściu gry Wiedźmin 3. Projekt nie miał większego celu, lecz dał możliwość poprawienia umiejętności z obiektem Date oraz samymi transformacjami w CSS.',linkToLive:"https://vuzeta.github.io/Witcher_Clock",linkToCode:"https://github.com/Vuzeta/Witcher_Clock",rootElement:document.querySelector(".projects__wrapper")}),new s({title:"Eudora",tech:"HTML5, CSS3, JavaScript",img:"eudora_image.jpg",desc:"Projekt Ceoluso-Website został zaczerpnięty z darmowego szablonu na symu.co. Projekt Eudora miał na celu utrwalenie wiadomości przekazanych mi w kursach na udemy.com Cięcie szablonów, rozmieszczenie elementów oraz wprowadzenie ich na strone internetową.",linkToLive:"https://vuzeta.github.io/Eudora_psd_to_html",linkToCode:"https://github.com/Vuzeta/Eudora_psd_to_html",rootElement:document.querySelector(".projects__wrapper")})};var p=function e(t){var i,o,a,n=this,r=t.title,s=t.imgTitle,c=t.imgExt,p=t.description,l=t.rootEl;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=function(){var e=document.createElement("div");e.classList.add("technology");var t=document.createElement("div");t.classList.add("technology__logo"),t.style.backgroundImage="url(assets/".concat(n.imgTitle,"_icon.").concat(n.imgExt,")");var i=document.createElement("p");i.classList.add("technology__description"),i.textContent=n.description;var o=document.createElement("span");o.classList.add("technology__title"),o.textContent="".concat(n.title," - "),n.rootEl.appendChild(e),e.appendChild(t),e.appendChild(i),i.insertBefore(o,i.firstChild)},(o="buildTechnology")in(i=this)?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,this.title=r,this.imgTitle=s,this.imgExt=c,this.description=p,this.rootEl=l,this.buildTechnology()},l=document.querySelector(".technologies__wrapper"),u=function(){new p({title:"HTML5",imgTitle:"html",imgExt:"svg",description:"Bardzo dobrze radzę sobie w tworzeniu prawidłowej struktury strony jak i wykorzystywaniu w niej tagów semantycznych.",rootEl:l}),new p({title:"CSS3",imgTitle:"css",imgExt:"svg",description:"Kaskadowe arkusze w stylu poznałem w stopniu, który pozwala na swobodne zbudowanie śrtednio-zaawansowanej strony internetowej. Umiem projektować szablony dzięki Flexbox oraz Grid. Często w projektach używam metodologii BEM.",rootEl:l}),new p({title:"JavaScript",imgTitle:"javascript",imgExt:"svg",description:"Główny język, którego się ucze. Potrafię manipulować elementami DOM, znam specyfikację ES6, potrafię programować funkcyjnie jak i obiektowo.",rootEl:l}),new p({title:"Sass",imgTitle:"sass",imgExt:"svg",description:"W wiekszości moich projektów używam preprocesora Sass. Ułatwia on mi pracę dzięki łatwemu odwoływaniu się do zmiennych, tworzeniu mixin'ów, rozszerzeń, interpolacji oraz instrukcji warunkowych.",rootEl:l}),new p({title:"jQuery",imgTitle:"jquery",imgExt:"svg",description:"Posiadam podstawy w pracy z jQuery, znam jego właściwości i metody, które pozwalają w łatwy sposób manipulować elementami DOM.",rootEl:l}),new p({title:"Bootstrap",imgTitle:"bootstrap",imgExt:"svg",description:'Posiadam wiedzę na temat działania jak i samej implementacji Boostrap\'a w projekcie. Technologii tej użyłem w swoim pierwszym portfolio. Boostrap ze względu na swoje działanie można porównać z materialize, którego użyłem w projekcie "Manager".',rootEl:l}),new p({title:"GIT",imgTitle:"git",imgExt:"svg",description:"Z systemu kontroli wersji korzystam w codziennej pracy, projekty które tworze umieszczam na Githubie",rootEl:l}),new p({title:"Gulp",imgTitle:"gulp",imgExt:"svg",description:'Task runner, którego używałem w projektach : "Portfolio", "Interactive Agency". W zależności od projektu korzystam z tej technologii lub Webpack\'a',rootEl:l}),new p({title:"Webpack",imgTitle:"webpack",imgExt:"svg",description:"Module Bundler bez którego nie wyobrażam sobie pracy z większym projektam. Stosuje go w większości projektów, pozwala mi on przygotować odpowiednio aplikacje do deploymentu.",rootEl:l}),new p({title:"React",imgTitle:"react",imgExt:"svg",description:'Technologia w której chciałbym się rozwijać. Na jej podstawie stworzyłem projekty "Manager", "Movie_Library", "TODO List".',rootEl:l}),new p({title:"Avocode",imgTitle:"avocode",imgExt:"svg",description:"Technologia ta pozwala mi na analize projektu graficznego, prace z plikami PSD, ułatwia ona również dostanie się do parametrów zaprojektowanego elementu i użycie ich w projekcie.",rootEl:l}),new p({title:"Jira & Confluence",imgTitle:"jira",imgExt:"svg",description:'Technologie, których używam codziennie w pracy w dziale Application Support. Pomaga mi jak i wszystkim w firmie na prostrze zarządzanie projektami jak i przydzielanymi zadaniami. Confluence zaś jest świetną "biblioteką wiedzy" w firmie.',rootEl:l})};window.addEventListener("DOMContentLoaded",(function(){c(),u()}));var d,m=document.querySelector(".hamburger"),g=document.querySelectorAll(".navigation__link");m.addEventListener("click",(function(){o(this)})),g.forEach((function(e){return e.addEventListener("click",n)})),(d=i(1)).keys().forEach(d)}]);