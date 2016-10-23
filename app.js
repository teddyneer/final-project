$(document).ready(function(){
	
	// navigation bar
	$(".navbar-nav, a").on("mouseenter", function(){
		// event.preventDefault();
		// $(this).animate({
		// 	"font-size": "30px"
		// });
		$(this).addClass("navjava");
	});
	$(".navbar-nav, a").on("mouseleave", function(){
		// $(this).animate({
		// 	"font-size": "15px"
		// });
		$(this).removeClass("navjava");
	});

	// blog page
	$(".animate").on("mouseenter", function(){
		$(this).addClass("animated infinite swing");
	});

	$(".animate").on("mouseleave", function(){
		$(this).removeClass("animated infinite swing");
	});

	$(".animate2").on("mouseenter", function(){
		$(this).addClass("animated infinite jello");
	});

	$(".animate2").on("mouseleave", function(){
		$(this).removeClass("animated infinite jello");
	});

	// home page carousel
	$(".carousel").carousel({
	    interval: 4000
	});
	$(".carousel").carousel("cycle");

	// skills page
	$("#pcmac").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#pcmac").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#microsoft").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#microsoft").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#nist").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#nist").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#code").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#code").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#java").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#java").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#github").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#github").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#scrum").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#scrum").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#analytics").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#analytics").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#adwords").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#adwords").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#labtech").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#labtech").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#autotask").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#autotask").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#eset").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#eset").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});

	$("#social").on("mouseenter", function(){
		$(this).addClass("skillsjava");
	});

	$("#social").on("mouseleave", function(){
		$(this).removeClass("skillsjava");
	});
});