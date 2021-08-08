import 'owl.carousel';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {
	let $shell = $('.header__navi');

	$('.header__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: false,
		nav: false,
		onInitialized: function(e) {
			if (! e.namespace) return;
			if (e.item.count == 0) {
				e.relatedTarget.$element.hide();
			}
		}
	});

	$('.header__menu-open, .header__menu-close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		$shell.toggleClass('opened');

		if($shell.hasClass('opened')) {
			disablePageScroll();
			return;
		}

		enablePageScroll();
	});
	
	$(window).on('click keyup', function(e) {
		if(($shell.hasClass('opened') && !e.target.closest('.header__navi')) || e.which == 27) {
			e.preventDefault();
			$shell.toggleClass('opened');
			enablePageScroll();
		}
	});

})();
