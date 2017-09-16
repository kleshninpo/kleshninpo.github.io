$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 200) {
		$('header').addClass("scrolled");
		$('.mobile').css("top", "2.7em");
	} else {
		$('header').removeClass("scrolled");
		$('.mobile').css("top", "4em");
	}
});

$(".menu-icon").click( function() {
	$(".page-header__nav-list").toggleClass("mobile")	
		// $(".page-header__nav-list").removeClass("mobile");
	// } else {
	// $(".page-header__nav-list").addClass("mobile");
	// }
});
