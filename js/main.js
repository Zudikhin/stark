$(document).ready(function() {
    "use strict";

    $(".dropdown_mob_body_item_top").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".dropdown_mob_body_item_list").slideToggle();
    });

    $(".dropdown_mob_top_btn").click(function() {
        $(".dropdown_mob").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".header_block_burger").click(function() {
        $(".dropdown_mob").addClass("active");
        $("body").addClass("scroll");
    });

    $('.construction_works_block_slider_main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 500,
		autoplay: false,
        fade: true,
		prevArrow: $('.construction_works_block_slider_prev'),
      	nextArrow: $('.construction_works_block_slider_next')
	});

    $(".projects_nav_wrap_item").click(function() {
        $(".projects_nav_wrap_item").removeClass("active");
        $(this).addClass("active");
        $(".projects_block_item").removeClass("hide");
        var id = $(this).attr("id");
        if(id != "all") {
            $(".projects_block_item").each(function() {
                var attr = $(this).attr("data-target");
                if(id != attr) {
                    $(this).addClass("hide");
                }
            });
        }
        
    });

    $(".butcher_list_item_head").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".butcher_list_item_body").slideToggle();
    });

    $("#NavGeneral").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".general").offset().top - 100
        }, 1000);
    });

    $("#NavDirections").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".directions").offset().top - 100
        }, 1500);
    });

    $("#Navbutcher").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".butcher").offset().top - 100
        }, 2000);
    });

    $("#NavCoordination").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".coordination").offset().top - 100
        }, 2500);
    });

    $('.main_mob').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: false,
        infinite: true,
		speed: 500,
        autoplaySpeed: 2000,
		autoplay: true,
        pauseOnHover:false,
        fade: true
	});

    $('.main_desk').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: false,
        infinite: true,
		speed: 500,
        autoplaySpeed: 2000,
		autoplay: true,
        pauseOnHover:false,
        fade: true
	});

    

    // $('.product_example_slider').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	speed: 500,
	// 	autoplay: false,
    //     fade: false,
	// 	prevArrow: $('.product_example_title_arrows_prev'),
    //   	nextArrow: $('.product_example_title_arrows_next'),
    //       responsive: [
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 fade: true
    //             }
    //         }
    //     ]
	// });

    // $('.residential_complexes_slider').slick({
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     dots: false,
    //     arrows: false,
    //     variableWidth: true
    // });

    // $('.collections_slider').slick({
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     dots: false,
    //     arrows: false,
    //     variableWidth: true
    // });

    // $('.flat_block_left_for_slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     fade: true,
    //     asNavFor: '.flat_block_left_nav',
    //     prevArrow: $('.flat_block_left_for_arrows_prev'),
    //   	nextArrow: $('.flat_block_left_for_arrows_next')
    // });

    // $('.flat_block_left_nav').slick({
    //     slidesToShow: 3,
    //     mobileFirst: true,
    //     slidesToScroll: 1,
    //     asNavFor: '.flat_block_left_for_slider',
    //     dots: false,
    //     arrows: false,
    //     focusOnSelect: true,
    //     responsive: [
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 4
    //             }
    //         },
    //         {
    //             breakpoint: 1919,
    //             settings: {
    //                 slidesToShow: 4,
    //                 adaptiveHeight: true,
    //                 vertical: true
    //             }
    //         }
    //     ]
    // });

    // $(".region_nav_item").click(function() {
    //     $(".region_nav_item").removeClass("active");
    //     $(this).addClass("active");
    //     var attr = $(this).attr("data-target");
    //     $(".region_content_item").removeClass("active");
    //     $(`#${attr}`).addClass("active");
    // });

    // $('.similar_block').slick({
    //     slidesToScroll: 1,
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     dots: false,
    //     arrows: false,
    //     variableWidth: true
    // });

    // $(".main_bottom_content_right").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $(".residential_complexes").offset().top
    //     }, 1000);
    // });

    // $('input').on('input',function(e){
    //     var valueInput = $(this).val();
    //     if(valueInput) {
    //         $(this).parent().find(".remove_input").css("display", "block");
    //     } else {
    //         $(this).parent().find(".remove_input").css("display", "none");
    //     }
    // });

    // $(".remove_input").click(function() {
    //     $(this).parent().find("input").val("");
    //     $(this).parent().find(".remove_input").css("display", "none");
    // });

    // $('.product_block_left_nav').slick({
    //     slidesToShow: 3,
    //     mobileFirst: true,
    //     slidesToScroll: 1,
    //     asNavFor: '.product_block_left_for',
    //     dots: false,
    //     arrows: false,
    //     focusOnSelect: true,
    //     adaptiveHeight: true,
    //     vertical: true
    // });

    // $('.product_block_left_for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.product_block_left_nav'
    // });

    // $(".product_nav_item").click(function() {
    //     var attr = $(this).attr("data-target");
    //     $(".product_nav_item").removeClass("active");
    //     $(this).addClass("active");
    //     $(".product_description_item").removeClass("active");
    //     $(`#${attr}`).addClass("active");
    // });

    // $('.product_similar_slider').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	speed: 500,
	// 	autoplay: false,
    //     fade: false,
	// 	prevArrow: $('.product_similar_title_arrows_prev'),
    //   	nextArrow: $('.product_similar_title_arrows_next'),
    //     responsive: [
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 fade: true
    //             }
    //         }
    //     ]
	// });

    // $('.about_bot_team_sliders').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	speed: 500,
    //     centerMode: true,
    //     centerPadding: 0,
	// 	autoplay: false,
    //     fade: false,
	// 	prevArrow: $('.about_bot_team_arrows_prev'),
    //   	nextArrow: $('.about_bot_team_arrows_next'),
    //       responsive: [
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
	// });

    // $(".faq_block_list_item_top").click(function() {
    //     $(this).parent().toggleClass("active");
    //     $(this).parent().find(".faq_block_list_item_body").slideToggle();
    // })

});