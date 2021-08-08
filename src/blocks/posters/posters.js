import 'owl.carousel';

(() => {

	$('.posters__items').owlCarousel({
		loop: true,
		items: 3,
		margin: 30,
		dotsEach: true,
		dotClass: 'posters__dot',
		nav: true,
		navText: ['', ''],
		navClass: ['posters__prev', 'posters__next'],
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			740: {
				items: 3,
			}
		}
	});
})();
