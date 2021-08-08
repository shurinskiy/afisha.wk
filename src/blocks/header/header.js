import 'owl.carousel';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {
	let $shell = $('.header__navi');

	$('.header__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: false,
		nav: false
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
