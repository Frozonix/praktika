let scroll = $(window).scrollTop();
$(window).scroll(function (event) {
    let scrollx = $(window).scrollTop();
    
    if(scrollx>200.9) {
    	
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

let isClose = true
let h = 0
let listMenu = $('#list')
let listElem = document.querySelectorAll('li.header__elem')




console.log(listElem)
document.getElementById("burger").addEventListener("click", function burgerOpenClose() {

    if(isClose) {
        $('.header__menu').css({
            background: '#401A1C',
            transition: '0.39s linear'
        })
        listElem[1].style.opacity = "0"
        listElem[2].style.opacity = "0"
        listElem[3].style.opacity = "0"
        listElem[4].style.opacity = "0"
        listElem[5].style.opacity = "0"
       
        listMenu.css({
            transition: 'height 0.6s cubic-bezier(0.4, 0, 0.5, 1) 500ms',
            height: '245px'
        })

        if(window.innerWidth < 960) {
            for (let i=1; i < listElem.length; i++) {
                    setTimeout(function (){
                        listElem[i].style.display = "unset"
                    }, 860);
                    setTimeout(function (){

                        listElem[i].style.opacity = "1"
                        listElem[i].style.transition = '0.25s linear'
                        
                        
                    }, 870);
                
                // elems[index].style.transition = "opacity 0.5s linear 0s";
                // elems[index].style.opacity = 0.5;
            }
        }
        $('.div-burger-menu').css({
             background: '#ED1B24'
        })
           
        
        

        isClose = false
    }
    else {
        listMenu.css({
            height: '0px'
        })
        if(window.innerWidth < 960) {
            for (let i=1; i < listElem.length; i++) {
                setTimeout(function (){
                        listElem[i].style.opacity = "0.4"
                        listElem[i].style.transition = '0.2s linear'
                        
                }, 300);
                setTimeout(function (){
                        listElem[i].style.display = "none"
                        
                }, 500);
                // elems[index].style.transition = "opacity 0.5s linear 0s";
                // elems[index].style.opacity = 0.5;
            }
            if(scroll<200.9) {
             $('.header__menu').css({
                background: '#ED1B24'
               
                })
            }
        }
        $('.div-burger-menu').css({
             background: 'unset'
        })
        isClose = true
    }
    // body...
})

