//////////////////////////////
$('.eq-block').on('mouseenter', function (e) {
    let id = e.target.id,
        popId='#i'+e.target.id.slice(1)
    console.log(popId)
 
    $(popId).css( {
        
        opacity:'1',
        transition: '0.6s linear',
        
        
    })
    
})

$('.eq-block').on('mouseout', function (e) {
let id = e.target.id,
    popId='#i'+e.target.id.slice(1)
 

    $(popId).css( {
    
    opacity:'0',
    transition: '0.6s linear',
    

    })
    

})

/////////////////////////////

