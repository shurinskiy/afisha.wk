import 'owl.carousel';

(() => {
	let $side = $('.culture__side');

	let insertion = function (e) {
		if (!e.namespace) { return; }

		let carousel = e.relatedTarget;
		let $current = carousel.$element.find('.owl-item').eq(e.item.index);

		$side
			.find('.culture__info')
			.hide()
			.html($current.find('.culture__item-info').html())
			.fadeIn();
	}


	$('.culture__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dotsEach: true,
		dotClass: 'culture__dot',
		nav: true,
		navText: ['', ''],
		navClass: ['culture__prev', 'culture__next'],
		onInitialized: insertion,
		onChanged: insertion
	});



})();
