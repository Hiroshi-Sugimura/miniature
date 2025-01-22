
//横にスライドするやつ//
$('.lis-slide').slick({
	autoplay: true,
	dots: false,				//丸いページナビボタンを表示
	arrows: false,			//左右の矢印
	Speed: 5000,	//切り替えのスピード。
	cssEase: 'linear',
	slidesToShow: 2,
	slidesToScroll:1,
  variableWidth: false, // falseでスライド幅が均等
  infinite: true,
   //画面の幅が890px以下の場合//
   responsive: [
   {
   breakpoint: 890,
  settings: {
	slidesToShow: 2,
  }
 
 }

 ]
 });