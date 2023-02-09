$(function () {
	var mixer = mixitup('.portfolio__list');

	$('.portfolio__filter-button').on('click', function () {
		$('.portfolio__filter-button').removeClass('portfolio__filter-button--active')
		$(this).addClass('portfolio__filter-button--active')
	})
})