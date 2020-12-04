(function($) {


    $('.profileContainer').hide()
    $('.imgContainer').hide()
    $('.portfolio').hide()
    $('.contact').hide()
    

    /* // 새로고침하면 첫화면이 뜨도록
    $('html, body').animate({
        scrollTop: '0'
    }, 800) */





    /* 작은화면에서 nav 작동 */
    function openNav(){
        $('#header').toggleClass('on')
        if ( $('#header').hasClass('on') ) {
            $('.nav').css({
                display:'block',
            }).animate({
                right:'0px'
            }, 500)
        } else {
            $('.nav').animate({
                right:'-320px'
            }, 500, function(){
                $(this).css({
                    display:'none'
                })
            })
        }
        $('.outlayer').toggleClass('on')
    }
    $('.open-gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)




    $(window).resize(function(){
        var winWidth = $(this).innerWidth()
        if (winWidth > 800) {
            $('#header').removeClass('on')
            $('.nav').css({
                display: 'block',
                right: '0px'
            })
            $('.outlayer').removeClass('on')
        } else if (winWidth <= 800) {
            $('.nav').css({
                display: 'none',
                right: '-320px'
            })
        }
    })


    /* 슬라이드 넘어가기 */
    $('.slide-inner').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        cssEase: 'linear',
        draggable: true,
        fade: false,
        arrows: true,
        prevArrow: '<button class="prevArrow marrow"><i class = "fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class = "fas fa-angle-right"></i></button>',
    })
    
    /* 슬라이드 멈춤 */
    $(".plpa").toggle(
        function(){
            $(this).find('i').removeClass('fa-pause')
            .addClass('fa-play')
            $(".slide-inner").slick("slickPause")
        },
        function(){
            $(this).find('i').removeClass('fa-play')
            .addClass('fa-pause')
            $(".slide-inner").slick("slickPlay")
        } 
    )


    //포트폴리오 갤러리 클릭 이벤트 팝업
    var href, src, alt, lieq


    $('.gallery > li > a').on('click', function(e){
        e.preventDefault();
        lieq = $(this).parent().index()
        console.log(lieq)
        $('.galleryPopup').addClass('on')
        href = $(this).attr('href')
        src = $(this).find('img').attr('src')
        alt = $(this).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr('src', src)
        $('.popupList > div > a > img').attr('alt', alt)

    })

    $('.galleryPopup .close').on('click', function(){
        $('.galleryPopup').removeClass('on')
    })

    $('.popupList').on('click', function(e){
        e.stopPropagation();
    })

    function changeList(ind) {
        href = $('.gallery > li').eq(ind).find('a').attr('href')
        src = $('.gallery > li').eq(ind).find('img').attr('src')
        alt = $('.gallery > li').eq(ind).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({'src': src, 'alt': alt}).css({opacity:'0.5'}).animate({opacity:'1'}, 500)
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
    var sct = 0;
    $(window).scroll(function () {

        sct = $(this).scrollTop();
        var winHeight = $(this).height();


        // // 스크롤 시 헤더 색상
        // if (sct >= winHeight) {
        //     $(".header-outer").css({
        //         background: 'rgba(255,255,255,1)'
        //     });
        // } else {
        //     $(".header-outer").css({
        //         background: 'none'
        //     });
        // }

        // 해당화면 온오프
        if (sct >= $('#profile').offset().top) {
            $('.imgContainer').stop().fadeIn(300)
            $('.profileContainer').stop().fadeIn(600)
        } else {
            $('.imgContainer').hide()
            $('.profileContainer').hide()
        }

        if (sct >= $('#portfolio').offset().top) {
            $('.portfolio').stop().fadeIn(300)
        } else {
            $('.portfolio').hide()
        }

        if (sct >= $('#contact').offset().top) {
            $('.contact').stop().fadeIn(300)
        } else {
            $('.contact').hide()
        }


        // 포트폴리오 순차적 띄우기
        var portcount = $('.gallery > li').length
        if (sct >= $('#portfolio').offset().top) {
            for (var i = 0; i < portcount; i++) {
                $('.gallery > li').eq(i).css({
                    animationDelay: (i + 1) * 0.15 + 's'
                })
            }    
        }
    
    });

    



    // nav 클릭시 이동
    $('.nav .depth1 > li > a').on('click', function (e) {

        e.preventDefault()
        var index = $(this).parent().index()
        var distance = $('.section').eq(index).offset().top
        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on')
        $('html, body').stop().animate({
            scrollTop: distance
        }, 800, 'linear')

    })





    // 마우스 휠 이벤트
     
    $(".section").on("mousewheel", function (e, wh) {
        var index = $(this).index()
        //마우스 휠을 올렸을때
        if (wh > 0) {
            var prev = $(this).prev().offset().top;
            $('.depth1 li').eq(index - 1).addClass('on')
            $('.depth1 li').eq(index - 1).siblings().removeClass('on')
            $("html,body").stop().animate({
                scrollTop: prev
            }, 800, "linear");

        //마우스 휠을 내렸을때	 
        } else if (wh < 0) {
            var next = $(this).next().offset().top;
            $('.depth1 li').eq(index + 1).addClass('on')
            $('.depth1 li').eq(index + 1).siblings().removeClass('on')
            $("html,body").stop().animate({
                scrollTop: next
            }, 800, "linear");
        }

    });






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