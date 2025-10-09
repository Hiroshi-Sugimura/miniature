//横にスライドするやつ//
$('.lis-slide').slick({
  autoplay: true,
  dots: false,                //丸いページナビボタンを表示
  arrows: false,              //左右の矢印
  autoplaySpeed: 3000,        //自動再生の切り替えスピード（ミリ秒）。3秒に設定
  speed: 1000,                //切り替えアニメーションのスピード（ミリ秒）。1秒に設定
  cssEase: 'linear',
  slidesToShow: 2,
  slidesToScroll: 1,          //1枚ずつスクロールに変更
  variableWidth: false,       // falseでスライド幅が均等
  infinite: true,
  centerMode: true,           // 中央揃え
  responsive: [
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});