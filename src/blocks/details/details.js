(() => {

	$('.details__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: true,
		dotsEach: true,
		nav: false
	 });

	 $('.details__order-btn').colorbox({
		inline: true,
		width : '700px',
		maxWidth: '95%',
	});

})();
