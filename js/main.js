'use strict';

{
  alert('BeartySalonはフリー画像等を使って想像で作った物です。ご了承ください。');
}

// 開始アニメーション

// ロゴの表示
$(window).on('load',function() {
  // ローディング画面を1.5秒待機してからフェイドアウト
  $("#splash").delay(1500).fadeOut('slow');
  // ロゴを1.2秒待機してからフェイドアウト
  $("#splash_logo").delay(1200).fadeOut('slow');
});


$(window).on('load',function(){
  // ロゴを2.9秒でフェードアウトする記述
  $("#splash_logo2").delay(2900).fadeOut('slow');
  // ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  $("#splash").delay(1500).fadeOut('slow',function(){
    $('body').addClass('appear'); // フェードアウト後bodyにappearくらす付与
  });
  $('.splashbg1').on('animationend',function(){
    // 背景が伸びた後に動かしたいJavaScriptがある場合はこの中にJavaScriptを記載
  });
});



$(function () {
  $(window).scroll(function () {
    $(".fade").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("fade-in");
      } else {
        $(this).removeClass("fade-in");
      }
    });
  });
  jQuery(window).scroll();
});






// ボタン
// ボタンがクリックされたら
$(".openbtn").click(function () {
  // ボタン自身にactiveクラスを付与し
  $(this).toggleClass('active');
  // ナビゲーションにpanelactiveクラスを付与
  $("#g-nav").toggleClass('panelactive');
  // ぼかしたいエリアにmainblurクラスを付与
  $("header,main,footer").toggleClass('mainblur');
});

// ナビゲーションのリンクががクリックされたら
$("#g-nav a").click(function () {
  // ボタン自身にactiveクラスを除去し
  $(".openbtn").removeClass('active');
  // ナビゲーションにpanelactiveクラスも除去
  $("#g-nav").removeClass('panelactive');
  // ぼかしたいエリアにmainblurクラスも除去
  $("header,main,footer").removeClass('mainblur');
});



// スクロールするとヘッダー背景画像が拡大
$(window).scroll(function() {
  var scroll = $(window).scrollTop(); //スクロール値を定義
  //header-imgの背景
  $('#header-img').css({
    transform:'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大、scroll/10の値を小さくすると拡大値が大きくなる
    top: -(scroll/50) + "%", //スクロール値を代入してtopの位置をマイナスにずらす
  });
});





//スライドショー
$('.slider').slick ( {
  autoplay:true, //自動的に動き出すか。初期値はfalse
  infinite:true, //スライドをループさせるかどうか。初期値はtrue
  slidesToShow:3, //スライドを画面に3枚見せる
  slidesToScroll:3, //1回のスクロールで３枚の写真を移動して見せる
  prevArrow:'<div class="slick-prev"></div>', //矢印部分Previewのhtmlを変更
  nextArrow:'<div class="slick-next"></div>', //矢印部分Nextのhtmlを変更
  dots:true, //下部ドットナビゲーションの表示
  responsive:[
    {
      breakpoint:769, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow:2, //スライドを画面に２枚見せる
        slidesToScroll:2, //１回のスクロールで２枚の写真を移動して見せる
      }
    },
    {
      breakpoint:426, //モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow:1, //スライドを画面に1枚見せる
        slidesToScroll:1, //１回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
});





