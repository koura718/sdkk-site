  jQuery.noConflict();
  jQuery(document).ready(function($) {
  // 「$」を使ったjQueryのコードを書く。

  $( '#my-slider' ).sliderPro({
      width: 1600, 
      height: 800,
      orientation: 'horizontal',
      thumbnailPosition: 'right',
      buttons: false,
      arrows: true,
      slideDistance: 0,
      fade: true,
      fadeDuration: 700,
      breakpoints: {
        800: {
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 270,
            thumbnailHeight: 100
        },
        500: {
            orientation: 'vertical',
            thumbnailsPosition: 'bottom',
            thumbnailWidth: 120,
            thumbnailHeight: 50
        }
      }
    });

  });
  // ここ以降は別ライブラリの「$」を使用したコードを書く。
  