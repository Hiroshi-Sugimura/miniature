
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