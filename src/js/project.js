class Project {
  constructor({
    title = 'Project',
    tech = 'technologies',
    img,
    desc = 'Description',
    linkToLive = 'https://github.com/Vuzeta',
    linkToCode = 'https://github.com/Vuzeta',
    rootElement,
  }) {
    (this.title = title), (this.tech = tech), (this.img = img), (this.desc = desc);
    this.linkToLive = linkToLive;
    this.linkToCode = linkToCode;
    this.rootEl = rootElement;
    this.show = false;
    this.buildProject();
  }

  buildProject = () => {
    const project = document.createElement('div');
    project.classList.add('project');

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('project__header-wrapper');

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('project__title');
    projectTitle.textContent = this.title;

    const tech = document.createElement('p');
    tech.classList.add('project__tech');
    tech.textContent = this.tech;

    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('project__icon-wrapper');

    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project__btn');
    projectBtn.addEventListener('click', this.showContent);

    const projectIconShow = document.createElement('i');
    projectIconShow.classList.add('fas', 'fa-chevron-down', 'project__icon', 'project__icon-show');

    const projectIMG = document.createElement('div');
    projectIMG.classList.add('project__image');
    projectIMG.style.backgroundImage = `url(assets/${this.img})`;

    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.classList.add('project__description-wrapper');

    const description = document.createElement('p');
    description.classList.add('project__description');
    description.textContent = this.desc;

    const linkLive = document.createElement('a');
    linkLive.classList.add('project__link-icon');
    linkLive.target = '_blank';
    linkLive.href = this.linkToLive;

    const linkCode = document.createElement('a');
    linkCode.classList.add('project__link-icon');
    linkCode.target = '_blank';
    linkCode.href = this.linkToCode;

    const desktopIcon = document.createElement('i');
    desktopIcon.classList.add('fas', 'fa-desktop', 'project__icon', 'project__icon-desktop');

    const codeIcon = document.createElement('i');
    codeIcon.classList.add('fas', 'fa-code', 'project__icon', 'project__icon-code');

    this.rootEl.appendChild(project);
    project.appendChild(headerWrapper);
    headerWrapper.appendChild(projectTitle);
    headerWrapper.appendChild(tech);
    project.appendChild(iconWrapper);
    iconWrapper.appendChild(projectBtn);
    projectBtn.appendChild(projectIconShow);
    project.appendChild(projectIMG);
    project.appendChild(descriptionWrapper);
    descriptionWrapper.appendChild(description);
    descriptionWrapper.appendChild(linkLive);
    linkLive.appendChild(desktopIcon);
    descriptionWrapper.appendChild(linkCode);
    linkCode.appendChild(codeIcon);
  };

  showContent = e => {
    const btn = e.target;

    const projectHeight = btn.parentNode.parentNode.clientHeight;
    const imgHeight = btn.parentNode.parentNode.querySelector('.project__image').clientHeight;
    const descHeight = btn.parentNode.parentNode.querySelector('.project__description-wrapper')
      .clientHeight;

    if (this.show === false) {
      this.show = !this.show;
      btn.classList.add('project__btn--active');
      btn.parentNode.parentNode.style.height = `${imgHeight + descHeight + projectHeight + 80}px`;
    } else {
      this.show = !this.show;
      btn.classList.remove('project__btn--active');
      btn.parentNode.parentNode.style.height = `85px`;
    }
  };
}

export default Project;
