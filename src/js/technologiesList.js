import Technology from './technology';

const rootElement = document.querySelector('.technologies__wrapper');

const initTech = () => {
	const tech1 = new Technology({
		title: 'HTML5',
		imgTitle: 'html',
		imgExt: 'svg',
		description:
			'Bardzo dobrze radzę sobie w tworzeniu prawidłowej struktury strony jak i wykorzystywaniu w niej tagów semantycznych.',
		rootEl: rootElement,
	});

	const tech2 = new Technology({
		title: 'CSS3',
		imgTitle: 'css',
		imgExt: 'svg',
		description:
			'Kaskadowe arkusze w stylu poznałem w stopniu, który pozwala na swobodne zbudowanie śrtednio-zaawansowanej strony internetowej. Umiem projektować szablony dzięki Flexbox oraz Grid. Często w projektach używam metodologii BEM.',
		rootEl: rootElement,
	});
};

export default initTech;
