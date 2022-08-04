//change navbar color
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow","rgba(0, 0, 0, 0.1) 0px  4px 12px ");
        }
        else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow","none");
        }
    })
})


//smooth scroll
var navbarHeight = $(".navbar").outerHeight(); void
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    }, 1000)
    e.preventDefault();
})




//swiper
var swiper = new Swiper(".mySwiper",
{
    loop: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination:{
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }

});