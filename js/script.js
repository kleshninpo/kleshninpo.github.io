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
