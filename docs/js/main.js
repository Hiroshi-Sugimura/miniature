//タイマー
$(function() {
    var timer = false;
    $(window).resize(function() {
        if(timer !== false){
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
        }, 500);
    });
});


// menu
$(window).on("load resize", function() {
    setTimeout(function(){

        var winW = window.innerWidth;
        var winBP = 900;	//ブレイクポイント

            //小さな端末用
            if(winW < winBP) {
                $('body').addClass('s').removeClass('p');
                $('#menubar').addClass('dn').removeClass('db');
                $('#menubar_hdr').addClass('db').removeClass('dn').removeClass('ham');
                
                    // 同一ページへのリンクの場合に開閉メニューを閉じる処理
                    $('#menubar a[href^="#"]').click(function() {
                        $('#menubar').removeClass('db');
                        $('#menubar_hdr').removeClass('ham');
                        $('.ddmenu_parent').removeClass('active');
                    });
                    
            //大きな端末用
            } else {
                $('body').addClass('p').removeClass('s');
                $('#menubar').addClass('db').removeClass('dn');
                $('#menubar_hdr').removeClass('db').addClass('dn');
                $('.ddmenu_parent').removeClass('active');
            }

    }, 100);
});


//ハンバーガーメニューをクリックした際の処理
$(function() {
    $('#menubar_hdr').click(function() {
        $(this).toggleClass('ham');

            if($(this).hasClass('ham')) {
                $('#menubar').addClass('db').removeClass('dn');
            } else {
                $('#menubar').addClass('dn').removeClass('db');
                // メニューを閉じるときにドロップダウンも閉じる
                $('.ddmenu_parent').removeClass('active');
            }

    });
});


//pagetop
$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
        $(scroll).hide();
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $(scroll).fadeIn().addClass(scrollShow);
            } else {
                $(scroll).fadeOut().removeClass(scrollShow);
            }
        });
});


//ロゴのフェードイン・アウト
$(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $('#logo').fadeOut();
            } else {
                $('#logo').fadeIn();
            }
        });
});


//スムーススクロール
$(window).on('load', function() {
    var hash = location.hash;
    if(hash) {
        $('body,html').scrollTop(0);
        setTimeout(function() {
            var target = $(hash);
            var scroll = target.offset().top - 40;
            $('body,html').animate({scrollTop:scroll},500);
        }, 100);
    }
});
$(window).on('load', function() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top - 40;
            $('body,html').animate({scrollTop:target},500);
            return false;
    });
});


// 汎用開閉処理
$(function() {
    $('.openclose').next().hide();
    $('.openclose').click(function() {
        $(this).next().slideToggle();
        $('.openclose').not(this).next().slideUp();
    });
});


//ドロップダウンの親liタグ
$(function() {
    $('#mainmenu a[href=""]').click(function() {
        return false;
    });
});


//ドロップダウンメニューの処理
$(function(){

    $('#menubar li:has(ul)').addClass('ddmenu_parent');
    $('#mainmenu li:has(ul)').addClass('ddmenu_parent');
    $('.ddmenu_parent > a').addClass('ddmenu');

        //小さな端末用（タッチデバイス・モバイル）
        $(document).on('click', '.s .ddmenu', function(e) {
            e.preventDefault();
            var parent = $(this).parent('.ddmenu_parent');
            
            // 既に開いている場合は閉じる
            if(parent.hasClass('active')) {
                parent.removeClass('active');
                $(this).next('ul').slideUp();
            } else {
                // 他のメニューを閉じる
                $('.ddmenu_parent').removeClass('active');
                $('.ddmenu_parent ul').slideUp();
                // このメニューを開く
                parent.addClass('active');
                $(this).next('ul').slideDown();
            }
            return false;
        });

        //PC用（900px以上）
        $(document).on('mouseenter', '.p .ddmenu_parent', function() {
            $(this).children('ul').stop().slideDown(200);
        });
        
        $(document).on('mouseleave', '.p .ddmenu_parent', function() {
            $(this).children('ul').stop().slideUp(200);
        });

});


//menubar内のiタグを横並び
$(function() {
    $('#menubar li:has(i)').addClass('inline');
});


//h2の中に下線用のスタイルを作る
$(function() {
    $('main h2').wrapInner('<span class="uline">');
});

