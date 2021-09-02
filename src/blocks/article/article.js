import 'jquery-colorbox';

(() => {

	$("a.article__image").colorbox({
		rel:'article__image',
		photo: true,
		maxWidth: '95%',
		maxHeight:'95%',
		current: ""
	});


})();
