import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {

	$('input.header__search').on("change", function () {
		let $self = $(this);

		if ($self.is(':checked')) {
			$self
				.next('.header__search-form')
				.find('input.search__query')
				.trigger('focus');

			disablePageScroll();
		} else {
			enablePageScroll();
		}
	});

	$('.header__search-form').on('click', function(e) {
		if(!e.target.closest('.search__form')) {
			$(this)
				.prev('input.header__search')
				.trigger('click')
		}
	})

})();
