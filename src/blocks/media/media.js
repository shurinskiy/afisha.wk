import 'owl.carousel';

(() => {

	$('.media__items').owlCarousel({
		loop: true,
		items: 3,
		margin: 30,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['media__prev', 'media__next'],
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			760: {
				items: 3,
			},
			1100: {
				items: 4
			}
		}
	});
})();
