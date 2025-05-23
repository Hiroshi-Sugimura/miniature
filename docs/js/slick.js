
//横にスライドするやつ//
$('.lis-slide').slick({
	autoplay: true,
	dots: false,				//丸いページナビボタンを表示
	arrows: false,			//左右の矢印
  autoplaySpeed: 0,    //切り替えのスピード。今回は平均してなめらかに移動させるので0にする。
	Speed: 1000,	//切り替えのスピード。
	cssEase: 'linear',
	slidesToShow: 2,
	slidesToScroll:2,
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