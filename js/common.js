$(document).ready((function(){if($(window).scroll((function(){$(window).scrollTop()>20?$("header").addClass("header_blue"):$("header").removeClass("header_blue")})),$(window).scrollTop()>20?$("header").addClass("header_blue"):$("header").removeClass("header_blue"),$(".scrollsect").on("click",(function(e){e.preventDefault();var l=$(this).attr("href"),a=$(l).offset().top;$("body,html").animate({scrollTop:a},1e3)})),$(".header__burger").click((function(){$(".menu-mob").toggleClass("show"),$(this).toggleClass("close")})),$(".modal, #videomodal .close, #videomodal .btn").on("click",(function(){console.log("sdadasdadad"),$("#ytvideo").attr("src",$("#videomodal iframe").attr("src"))})),$(".header-services__filterbtn").click((function(){$(this).toggleClass("active")})),$(".header-services__clearall").click((function(){$(".header-services__filterbtn").removeClass("active")})),$("body *").is("#scene")){var e=document.getElementById("scene");new Parallax(e)}}));