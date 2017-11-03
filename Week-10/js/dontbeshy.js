console.log('im linked')

var dbsheight;
var txtheight;

$(window).resize(function(){
    dbsheight = $('.dontbeshy').offset().top  
})

$(document).ready(function(){
    dbsheight = $('.dontbeshy').offset().top
//    console.log(dbsheight)
})


$(document).ready(function(){
    txtheight = $('.workTxt').offset().top
    console.log(txtheight)
})

 
//    console.log("im linked")

$(window).scroll(function() {
    var bdyheight = $(window).scrollTop();
//    console.log(bdyheight)
//    if (bdyheight >= 617) {
//       console.log('im here')
//        $(".dontbeshy").animate({
//            opacity : 1.0
//        }, 700);
//    } else if(bdyheight = 0){
//        $(".dontbeshy").css('opacity', '0')  
//    }
    if (bdyheight >= (dbsheight/2+100)) {
        $(".homeContactMeBtn").addClass('bigger');
        $(".dontbeshy").addClass('visible');
    } else{
        $('.homeContactMeBtn').removeClass('bigger');
        $(".dontbeshy").removeClass('visible');
    }
    
    if (bdyheight >= txtheight/2) {
        $('.workTxt').addClass('appear');
    } else{
        $('.workTxt').removeClass('appear');
    }
}); 


