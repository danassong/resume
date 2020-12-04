(function($) {

    $(".section").on("mousewheel", function (e, wh) {
        var index = $(this).index()
        //마우스 휠을 올렸을때
        if (wh > 0) {
            var prev = $(this).prev().offset().top;
            $('.depth1 li').eq(index - 1).addClass('on')
            $('.depth1 li').eq(index - 1).siblings().removeClass('on')
            $("html,body").stop().animate({
                scrollTop: prev
            }, 1000, "linear");

        //마우스 휠을 내렸을때	 
        } else if (wh < 0) {
            var next = $(this).next().offset().top;
            $('.depth1 li').eq(index + 1).addClass('on')
            $('.depth1 li').eq(index + 1).siblings().removeClass('on')
            $("html,body").stop().animate({
                scrollTop: next
            }, 1000, "linear");
        }
    });


    // 스크롤 탑일때와 아닐때 -- 헤더 상단 / gotop / 스킬 적용
    var sct = 0;
    $(window).scroll(function () {

        sct = $(this).scrollTop();
        var winHeight = $(this).height();


        // // 스크롤 시 헤더 색상
        if (sct >= winHeight) {
            $(".header-outer").css({
                color: '#61BC8F'
            });
        } else {
            $(".header-outer").css({
                color: '#fff'
            });
        }

        // 해당화면 온오프
        if (sct >= $('#section1').offset().top) {
            $('.home').stop().fadeIn(600)
        } else {
            $('.home').hide()
        }
        if (sct >= $('#section2').offset().top) {
            $('.profile').stop().fadeIn(300)
        } else {
            $('.profile').hide()
        }
        if (sct >= $('#section3').offset().top) {
            $('.publishing').stop().fadeIn(300)
        } else {
            $('.publishing').hide()
        }
        if (sct >= $('#section4').offset().top) {
            $('.portfolio').stop().fadeIn(300)
        } else {
            $('.portfolio').hide()
        }


        // 포트폴리오 순차적 띄우기
        var portcount = $('.gallery > li').length
        if (sct >= $('.portfolio').offset().top) {
            for (var i = 0; i < portcount; i++) {
                $('.gallery > li').eq(i).css({
                    animationDelay: (i + 1) * 0.15 + 's'
                })
            }    
        }
    
    });

    /* 슬라이드 넘어가기 */
    $('.publishing').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: false,
        nextArrow: '<button class="nextArrow marrow"><i class = "fas fa-angle-right"></i></button>',
    })



     // 포트폴리오 필터
     $('.all').show()
     $('.tab_menu > li > button').on('click', function(){
         $(this).addClass('act')
         $(this).parent().siblings().find('button').removeClass('act')
         var datac = $(this).attr('data-c')
         $('.all').css({
             transform: 'scale(0)'
         }).stop().hide()
         $('.'+datac).stop().show(300).css({
             transform: 'scale(1)'
         })
         return false
     })
 
     $('.tab_items > div > a').on('click', function() {
         $(this).next().addClass('on')
         return false
     })
 
     $('.close_detail, .detail_wrap').on('click', function() {
         $('.detail_wrap').removeClass('on')
     })
 
     $('.detail_con').on('click', function(){
         return false;
     })

})(jQuery)