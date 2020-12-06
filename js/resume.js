(function($) {


    // // 페이지 로딩화면
    // $(window).on('load', function(){
    //     $('.introAni').delay(2000).fadeOut(500)
    // })


    // // 새로고침하면 첫화면이 뜨도록
    // $('html, body').animate({
    //     load
    // }, 800)


    var myFullpage = new fullpage('#fullpage', {
        anchors: ['home', 'profile', 'publishing', 'portfolio', 'contact'],
        lazyLoad: true
    });


    // 스크롤 탑일때와 아닐때 -- 헤더 상단 / gotop / 스킬 적용
    $(window).on('hashchange', function () {

        var hashtagname = location.hash;
        if (hashtagname == "#profile" || hashtagname == "#publishing" || hashtagname == "#portfolio" ) {
            $('.header-outer').addClass('on')
        } else {
            $('.header-outer').removeClass('on')
        }
    


        /* // 포트폴리오 순차적 띄우기
        var portcount = $('.gallery > li').length
        if (sct >= $('.portfolio').offset().top) {
            for (var i = 0; i < portcount; i++) {
                $('.gallery > li').eq(i).css({
                    animationDelay: (i + 1) * 0.15 + 's'
                })
            }    
        } */
    
    });

    /* 슬라이드 넘어가기 */
    $('.publishing').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        prevArrow: false,
        nextArrow: false,
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