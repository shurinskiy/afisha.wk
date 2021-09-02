import 'jquery-colorbox';
import 'owl.carousel';

(() => {

	$('.p-gallery').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: true,
		nav: false,
		onInitialized: makeThumb
	 });

	 function makeThumb(e) {
		if (e.item.count <= 1) {
			this.$element.addClass('p-gallery_single');
			this.destroy();
			return;
		}

		let $items = $(e.target).find('.owl-item:not(.cloned)');
		let $dots = $(e.target).find('.owl-dot');

		$items.each(function(index) {
			$dots.eq(index).css({
				'background-image': `url(${$(this).find('img').attr('src')})`,
				'background-size': 'cover'
			})
		})
	}

	$(".p-gallery__item").colorbox({
		rel:'p-gallery__item',
		photo: true,
		maxWidth: '95%',
		maxHeight:'95%',
		current: ""
	});

})();
