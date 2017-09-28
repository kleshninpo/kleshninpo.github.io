$(document).ready(function() {
	$(".header-link").click( function() {
		var scroll_el = $(this).attr("href");
		if($(scroll_el).length != 0) {
			$("html, body").animate({
				scrollTop: $(scroll_el).offset().top
			}, 500);
		}
		return false;
	})
});

$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 200) {
		$('header').addClass("scrolled");
		$('.mobile').addClass("scrolled-menu");
	} else {
		$('header').removeClass("scrolled");
		$('.mobile').removeClass("scrolled-menu");
	}
});

$(".menu-icon").click( function() {
	$(".page-header__nav-list").toggleClass("mobile")
});

