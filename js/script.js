$(window).on('load',function(){$(".loading").fadeOut('solw');});$(document).ready(function(){"use strict";$(".tabs-list li").on("click",function(){$(this).addClass("borderXwidth").siblings().removeClass("borderXwidth");$(".sections_list > section").hide(0);$($(this).data("content")).stop(true).fadeIn(600);});particlesJS("particles-js",{"particles":{"number":{"value":120,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});$('.update').animate({left:'0'},1000);$('.content-one, .navbar-brand').on('click',function(){$('.update').animate({left:'-500px'},1500);});$('.tabs-list li:nth-of-type(2)').on('click',function(){$(".bk-1").animate({width:"95%"},2000);$(".bk-2").animate({width:"90%"},2000);$(".bk-3").animate({width:"70%"},2000);$(".bk-4").animate({width:"80%"},2000);$(".bk-5").animate({width:"90%"},2000);$(".bk-6").animate({width:"80%"},2000);$(".bk-7").animate({width:"40%"},2000);$(".bk-8").animate({width:"85%"},2000);$(".bk-9").animate({width:"90%"},2000);$(".bk-10").animate({width:"85%"},2000);$('.c-skills').fadeIn("slow");});$(".sections_list > section:not(:first-child)").niceScroll({cursorcolor:"#2670AF",cursorwidth:"7px",cursorborder:"none",cursorborderradius:"0",autohidemode:false});$(".co-just-1").niceScroll({cursorcolor:"#e6e6e6",cursorwidth:"7px",cursorborder:"none",cursorborderradius:"0",autohidemode:false});(function($){function mediaSize(){if(window.matchMedia('(max-width: 768px)').matches){$('.active_edit span').click(function(){$('.navbar-toggle').click();});}else{$('.active_edit span').unbind();}};mediaSize();window.addEventListener('resize',mediaSize,false);})(jQuery);$('.tabs-list li:nth-of-type(3)').on('click',function(){$(".portfolio").animate({top:"50%"},1500);});$(".portfolio div:nth-of-type(2)").click(function(){$(".portfolio a span, .portfolio div:nth-of-type(2) span, .portfolio > div:not(:last-of-type) div div, .portfolio :first-of-type > a div").fadeOut(1000);});$(".co-just-1 .fa-times").on('click',function(){$(".co-just-1").fadeOut('solw');$(".portfolio a span, .portfolio div:nth-of-type(2) span, .portfolio > div:not(:last-of-type) div div, .portfolio :first-of-type > a div").fadeIn(1000);});$(".portfolio div:nth-of-type(2)").click(function(){$(".co-just-1").fadeIn('solw');});});