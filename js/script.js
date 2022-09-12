$(window).load(function(){
  $(".backtotop i").hide();
});
$(window).scroll(function(){
let scrolling = $(this).scrollTop();
if( scrolling > 100){
  $(".backtotop i").fadeIn(500);
}
else{
  $(".backtotop i").fadeOut(500);
}
});
$(".backtotop i").click(function(){
	$("html, body").animate({
		scrollTop:0
	},1000)
});
// backtotop js

new VenoBox({
  selector: '.my-link',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});
// work venobox js

$('.testimonial-slick').slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
// testimonial js