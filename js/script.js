$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    if(scroll>200.9) {
    	
    	$('.header__for-fixed').css({position:'fixed',
			top:'0px'})
    	$('.header__menu').css({position:'fixed'})
    	$('.header__menu').css({
    		background: '#401A1C',
    		transition: '0.9s linear'

    })



    }
    else {

    	$('.header__for-fixed').css({position:'unset',
			top:'200px'})
    	$('.header__menu').css({position:'unset', background:'#ED1B24' })
    }
});

document.querySelectorAll('.header__a')

$( ".header__point" ).on( "click", function(event) {
  console.log(event.target.id)
});