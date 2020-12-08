(function($) {


    // // 페이지 로딩화면
    // $(window).on('load', function(){
    //     $('.introAni').delay(2000).fadeOut(500)
    // })


    var myFullpage = new fullpage('#fullpage', {
        anchors: ['home', 'profile', 'publishing', 'portfolio', 'contact'],
        lazyLoad: true
    });

    // 새로고침하면 첫화면이 뜨도록
    $(window).on('load', function(){
        location.hash = '#home'
    })



    //포트폴리오 갤러리 클릭 이벤트 팝업
    var href, src, alt, lieq

    $('.portfolio .pofolImage .gallery li a').on('click', '.overlay', function(e){
        e.preventDefault();
        lieq = $(this).parent().parent().index()
        var detailImg = $(this).attr('data-src')
        console.log(lieq)
        $('.galleryPopup').addClass('on')
        $('.header-outer').removeClass('on')
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr('src', detailImg)
        $('.popupList > div > a > img').attr('alt', alt)
    })

    $('.galleryPopup .popupList .close').on('click', function(){
        $('.galleryPopup').removeClass('on')
        $('.header-outer').addClass('on')
    })

    $('.popupList').on('click', function(e){
        e.stopPropagation();
    })

    function changeList(ind) {
        href = $('.gallery > li').eq(ind).find('a').attr('href')
        src = $('.gallery > li').eq(ind).find('.overlay').attr('data-src')
        alt = $('.gallery > li').eq(ind).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({'src': src}).css({opacity:'0.5'}).animate({opacity:'1'}, 500)
    }


    $('.popupList .prev').on('click', function(){
        --lieq
        if (lieq < 0) {
            lieq = 5
        }
        changeList(lieq)
    })

    $('.popupList .next').on('click', function(){
        ++lieq
        if (lieq > 5) {
            lieq = 0
        }
        changeList(lieq)
    })




    // 스크롤 탑일때와 아닐때 -- 헤더 상단 / gotop / 스킬 적용
    $(window).on('hashchange', function () {

        var hashtagname = location.hash;
        if (hashtagname == "#profile" || hashtagname == "#publishing" || hashtagname == "#portfolio" ) {
            $('.header-outer').addClass('on')
        } else {
            $('.header-outer').removeClass('on')
        }


        

        if (hashtagname == '#home') {
            $('#header .nav .depth1 > li').removeClass('on')
            $('#header .nav .depth1 > li:nth-child(1)').addClass('on')
            $('.galleryPopup').removeClass('on')
        } else if (hashtagname == '#profile') {
            $('#header .nav .depth1 > li').removeClass('on')
            $('#header .nav .depth1 > li:nth-child(2)').addClass('on')
            $('.profile .myImage .profileInfo').addClass('ani')
            $('.profile .myImage .circle1').addClass('ani')
            $('.profile .myImage .circle2').addClass('ani')
            $('.profile .myImage .circle3').addClass('ani')
            $('.profile .myInfo .education').addClass('ani')
            $('.profile .myInfo .award').addClass('ani')
            $('.profile .myInfo .paper').addClass('ani')
            $('.galleryPopup').removeClass('on')
        } else if (hashtagname == '#publishing') {
            $('#header .nav .depth1 > li').removeClass('on')
            $('#header .nav .depth1 > li:nth-child(3)').addClass('on')
            $('.galleryPopup').removeClass('on')
        } else if (hashtagname == '#portfolio') {
            $('#header .nav .depth1 > li').removeClass('on')
            $('#header .nav .depth1 > li:nth-child(4)').addClass('on')
        } else if (hashtagname == '#contact') {
            $('#header .nav .depth1 > li').removeClass('on')
            $('#header .nav .depth1 > li:nth-child(5)').addClass('on')
            $('.contact .contactText h1').addClass('ani')
            $('.contact .contactText .thanks').addClass('ani')
            $('.galleryPopup').removeClass('on')
        }
    


        // 포트폴리오 순차적 띄우기
        var portcount = $('.portfolio .pofolImage .gallery li').length
        if (hashtagname == '#portfolio') {
            $('.portfolio .pofolImage .gallery li').addClass('ani')
            for (var i = 0; i < portcount; i++) {
                $('.portfolio .pofolImage .gallery li').eq(i).css({
                    animationDelay: (i + 1) * 0.15 + 's'
                })
            }    
        }
    
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