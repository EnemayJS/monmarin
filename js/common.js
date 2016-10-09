$(document).ready(function() {



	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true, showCloseBtn: true});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");


	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	
};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");
});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":hidden")) {
		$(".top_text").addClass("h_opacify");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	} else {
		$(".top_text").removeClass("h_opacify");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	};

	});
	$(".top_mnu li a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href","#work_" + i);
		$(this).find(".port_descr").attr("id","work_" + i);

	});

	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 

