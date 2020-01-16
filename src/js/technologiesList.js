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

	console.log(tech1);
};

export default initTech;
