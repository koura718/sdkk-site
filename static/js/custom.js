  jQuery.noConflict();
  jQuery(document).ready(function($) {
  // 「$」を使ったjQueryのコードを書く。

$(function(){
    $('.more').each(function(){
        var $ele = $(this);
        $ele.prepend('<div class="open"><a href="#">&#9660; もっと見る</a></div>');
        // $ele.append('<div class="close"><a href="#">&#9650; 閉じる</a></div>');
        $ele.find('.open').nextAll().hide();
        $ele.find('.open').click(function(){
            $ele.find('.open').hide();
            $ele.find('.open').nextAll().slideDown();
            return false;
        });
         $ele.find('.close').click(function(){
            $ele.find('.open').nextAll().slideUp('slow', function() {
                $ele.find('.open').show();
            });
            return false;
        });
    });

    var pageTop = $('.page-top');
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body, html').animate({scrollTop:0}, 500, 'swing');
        return false;
    });


});

  });
  // ここ以降は別ライブラリの「$」を使用したコードを書く。
