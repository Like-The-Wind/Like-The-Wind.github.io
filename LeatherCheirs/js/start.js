/*
 * jQuery Form Tips 1.2.6
 * By Manuel Boy (http://www.manuelboy.de)
 * Copyright (c) 2012 Manuel Boy
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 */

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        autoplayHoverPause:true
    });
});

(function(){
    $(".mobile-search").click(function () {
        $(".search").toggle('slow');
    });
})();
(function(){
    $(".mobile-menu").click(function () {
        $(".main-menu").slideToggle('slow');
    });
})();
(function(){
    $(".plus_btn").click(function () {
         $("li>ul").slideToggle('slow');
    });
})();
//(function (a) {
//    a.fn.formtips = function (b) {
//        var c = a.extend({tippedClass:"tipped"}, b);
//        return this.each(function () {
//            var b = a(this);
//            var d = a(b).attr("type");
//            if (d != "file" && d != "checkbox" && d != "radio") {
//                a(b).bind("focus", function () {
//                    var b = a(this).attr("title");
//                    if (a(this).val() == b) {
//                        a(this).val("").removeClass(c.tippedClass)
//                    }
//                    return true
//                });
//                a(b).bind("blur", function () {
//                    var b = a(this).attr("title");
//                    if (a(this).val() == "") {
//                        a(this).val(b).addClass(c.tippedClass)
//                    }
//                    return true
//                });
//                var e = a(b).attr("title");
//                if (a(b).val() == "" || a(b).val() == a(this).attr("title")) {
//                    a(b).val(e).addClass(c.tippedClass)
//                } else {
//                    a(b).removeClass(c.tippedClass)
//                }
//                a(b).parentsUntil("form").parent().submit(function () {
//                    var d = a(b).attr("title");
//                    if (a(b).val() == d) {
//                        a(b).val("").removeClass(c.tippedClass)
//                    }
//                })
//            }
//        })
//    }
//
//})(jQuery);
//
//jQuery.extend(verge);
//var desktop = true,
//    tablet = false,
//    mobile = false;
//
//jQuery(function ($) {
//
//    function equalHeight(group, groupSize) {
//        if (!group.length) {
//            return;
//        }
//        groupSize = +(groupSize || 0);
//        if (groupSize < 1) {
//            groupSize = group.length;
//        }
//        var start = -groupSize, part;
//        while ((part = group.slice(start += groupSize, start + groupSize)) && part.length) {
//            part.height(Math.max.apply(null, $.makeArray(part.map(function () {
//                return $(this).height();
//            }))));
//        }
//    }
//
//    $(window).resize(function () {
//        if ($.viewportW() >= 1024) {
//            desktop = true;
//            tablet = false;
//            mobile = false;
//        }
//        if ($.viewportW() >= 768 && $.viewportW() <= 1023) {
//            desktop = false;
//            tablet = true;
//            mobile = false;
//        } else {
//            if ($.viewportW() <= 767) {
//                desktop = false;
//                tablet = false;
//                mobile = true;
//            }
//        }
//    }).resize();
//
//    $('input[title]').formtips();
//
//    $(window).load(function () {
//
//
//        $(window).resize(function(){
//            // carouFredSel slider recalc size
//
//            // clearTimeout(doit);
//            // doit = setTimeout(function () {
//            //     resizedw();
//            // }, 500);
//
//        }).resize();
//
//    });
//
//    /*rotation carousel size fix*/
//    // var doit;
//    // function resizedw() {
//    //    selector.each(function () {
//    //         $(this).trigger('configuration', ['debug', false, true]);
//    //     });
//
//    // }
//});






