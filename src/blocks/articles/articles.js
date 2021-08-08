import 'owl.carousel';

(() => {

	$('.articles__items').owlCarousel({
		loop: true,
		items: 3,
		margin: 30,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['articles__prev', 'articles__next'],
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
