
(function(){
                                                   //video resize
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.video-bg').css('min-height', windowHeight);
    };
    setHeight();
    $(window).resize(function() {
        setHeight();
    });
                                            // open menu btn
    $('.menu_btn').click(function(){
        $(this).toggleClass('close-menu');
       $('#menu').toggleClass('open-menu')
    });
                                             // fixed header
    var $header = $("header");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $header.addClass("fixed");
        } else {
            $header.removeClass("fixed");
        }
    });
                                                // owl-carousel_main product_01
    if($('.carousel-main').length){
        $('.carousel-main').owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            nav:true,
            autoplayHoverPause:true
        });
    }
                                                 // owl-carousel_bubble product_01
    if($('.carousel-main').length){
        $('.bubble-carousel').owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            nav:true,
            autoplayHoverPause:true
        });
    }
                                                 // owl-carousel_product(tea-cup) product_01
    if($('.carousel-prod').length){
        $('.carousel-prod').owlCarousel({
            loop:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:2,
                    nav:false
                },
                1100:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        });
    }
                                                // owl-carousel_tea-offers product_01
    if($('.carousel-tea-offers').length){
        $('.carousel-tea-offers').owlCarousel({
            loop:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:2,
                    nav:false
                },
                1100:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        });
    }
                                                // tabs for submenu
    $(".tabs__control-link").on("click", function(a){
        a.preventDefault();

        var item = $(this).closest(".menu-item"),
            contentItem = $(".submenu__tea"),
            itemPosition = item.index();

        //console.log(itemPosition);

        contentItem.eq(itemPosition)
            .addClass('submenu__tea_active')
            .siblings()
            .removeClass('submenu__tea_active');

        item.addClass('menu-item_active')
            .siblings()
            .removeClass('menu-item_active');

    });
                                                        // product_01 VIDEO
    if($('#play-btn').length){
        var wrapper = document.getElementById('video-tea');
        var vid = document.getElementById('video');
        var button = document.getElementById("play-btn");

        if(wrapper.addEventListener){
            wrapper.addEventListener("click", play, false)
        }else if(wrapper.attachEvent){
            wrapper.attachEvent("onclick", play)
        }
        function play() {
            if (vid.paused){
                vid.play();
                button.className = "o";
            }else {
                vid.pause();
                button.className = "play-btn";
            }
        }
    }
                                                        //scrollTo
    $('.arrow').click(function(){
        $('html,body').scrollTo('.content', 1000, { queue:true });
    });
                                                       //scrollTo (with animate)
    //$('.arrow').click(function() {
    //    $('html,body').animate({
    //        scrollTop: $('.content').offset().top
    //    }, 2000);
    //    return false;
    //});

})();


                                                //Skroller
$(document).ready(function() {
    if($('.no-touch').length){
        skrollr.init({
            forceHeight: false
        });
    }
});


                                                     // pop-up
$(document).ready(function() {
    if($('#pop-up').length){
        $(".basket-icon").fancybox({
            padding: 0,
            afterShow: function(){
                $('.carousel-basket').owlCarousel({
                    items:1,
                    loop:true,
                    autoplay:true,
                    autoplayTimeout:3000,
                    nav:true,
                    autoplayHoverPause:true
                });
            }
        });
    }
});
                                                               // google-map
function initMap() {
    var kiev = {lat: 50.441641, lng: 30.5170106};
    //var petersburg = {lat: 59.9391901, lng: 30.3411059,11};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: kiev
    });

    var img = 'img/marker.png';
    var marker = new google.maps.Marker({
        position: kiev,
        map: map,
        icon: img,
        title: 'ул.Пушкинская, 33'
    });
}
                                                                // select2
$(document).ready(function() {
    if($('select').length){
        $(".quantity").select2();
    }

});

////layers animation
//var scrollAllowed = true;
//
//var homepageSlide = function(e) {
//
//    if (!scrollAllowed) {
//        return;
//    }
//
//    scrollAllowed = false;
//    var delta = e.deltaY * e.deltaFactor;
//    var el;
//    var current = $('.content__item.active');
//    var horizontalActive;
//
//    if (delta > 0) { // scroll up
//
//        if (current.prev().length) {
//            el = current.prev();
//        } else {
//            scrollAllowed = true;
//            return;
//        }
//    } else { // scroll down
//
//        if (current.next().length) {
//            el = current.next();
//        } else {
//            scrollAllowed = true;
//            return;
//        }
//    }
//
//    if (el.length) {
//        el.addClass('active');
//
//        $.scrollTo(el, 1000);
//        setTimeout(function() {
//            scrollAllowed = true;
//        }, 1100);
//    } else {
//        scrollAllowed = true;
//    }
//};
//
//var homePage = $('.home-page');
//
//if (homePage.length) {
//    homePage.on('mousewheel', homepageSlide);
//}