import 'owl.carousel';

(() => {

	$('.catalog__items').owlCarousel({
		loop: true,
		items: 1,
		margin: 20,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['catalog__prev', 'catalog__next'],
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			640: {
				items: 3,
			},
			780: {
				items: 4,
			},
			960: {
				items: 5,
			},
			1100: {
				items: 6,
			}
		}
	});
})();
