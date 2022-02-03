  jQuery.noConflict();
  jQuery(document).ready(function($) {
  // 「$」を使ったjQueryのコードを書く。
    /* DOM Elements */
    var obj1 = $('#anim1');
    var obj2 = $('#anim2');
    var obj3 = $('#anim3');
    var obj4 = $('#anim4');
    var obj5 = $('#anim5');
    var obj6 = $('#anim6');
    var obj7 = $('#anim7');

    /* Main Function */
    function main_animation () {
        // アニメーションを配列にする
        // animation... アニメーションの関数名
        // interval...  アニメーション実行から、次のアニメーションが実行されるまでの時間差（ミリ秒）
        var timeline = [
            {animation:move_obj_2, interval:3000},
            {animation:move_obj_1, interval:2000},
            {animation:move_obj_3, interval:1000},
            {animation:move_obj_5, interval:3500},
            {animation:move_obj_4, interval:4000},
            {animation:move_obj_6, interval:5000},
            {animation:move_obj_7, interval:1000}
            //{animation:move_obj_1, interval:5000}
        ];
        // 最初のアニメーションが始まるまでの時間
        var interval_sum = 500;
        // アニメーションを上から順に実行していく
        // intervalの値はどんどん加算されて、
      　// setTimeout()関数により時間をずらしながら実行される
        var len = timeline.length;
        for(var i=0; i<len; i++){
            setTimeout(timeline[i].animation, interval_sum);
            interval_sum += timeline[i].interval;
        }
    }
    main_animation();

    /* Animation Functions */
    var inner_w = $('body').innerWidth();
    var inner_h = $('body').innerHeight();
    function move_obj_1 () { // 空草
        obj1.fadeTo(2000,0.7);
    /*    obj1.animate({
			opacity: 0.5,
			
            'right': inner_w,
        },0, 'linear', function(){
            obj1.animate({
                'left': 0,
                'opacity': 1
            }, 2000, 'linear');
        });
    */
    }

    function move_obj_2 () { // logo
        obj2.fadeTo(2000,0.7).fadeOut(5000);
    /*    obj2.animate({
            'right': inner_w,
        },0, 'linear', function(){
            obj2.animate({
                'left': inner_w,
                'opacity': 1
            }, 2000, 'linear');
        });
    */
    }
 
    function move_obj_3 () { // ChallengeNo1
        obj3.fadeTo(3000,0.7).fadeOut(5000);
    /*    obj1.animate({
            'left': '-500px',
            'opacity':1
        },1500, 'linear', function(){
            obj1.animate({
                'top': '-50px',
                'opacity':1
            }, 10500, 'linear'),
            obj3.animate({
                'top': '0px',
                'opacity':1
            }, 10500, 'linear')
        });
    */
    }

    function move_obj_4 () { //人文字
        obj4.fadeTo(2000,0.7)
          .animate({
            opacity: 0
          }, 3000, '', function() {
            obj1.fadeOut(2500);
        });
    }
    function move_obj_5 () { //車
        obj5.animate({
            'right': inner_w,
			top: inner_h * 0.12,
            'opacity': 1
        },0, 'linear', function(){
            obj5.animate({
                'left': inner_w,
            }, 6000, 'linear');
        });
    }
    function move_obj_6 () { //三共電気タイトル
        obj6.fadeTo(2000,0.7);
        //obj6.animate({
        //});
    }
    function move_obj_7 () { //honsya
        obj7.animate({
        });
    }

});
  // ここ以降は別ライブラリの「$」を使用したコードを書く。
