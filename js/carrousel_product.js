$(function(){
  //initialize jcarousel
  $('.jcarousel').jcarousel();
  
  //jcarousel prev/next buttons
  $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    carouselEnabler();
});

$(window).resize(function(){
    carouselEnabler();
});


//check resolution, if in smaller resolution, destroy jcarousel
function carouselEnabler(){
    // Get the dimensions of the viewport
    var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;


    if(width <= 768){
        if($('.jcarousel').attr('data-jcarousel')){   // check if jcarousel has not yet been destroyed
            $('.jcarousel').jcarousel('destroy').addClass('jcarousel-disabled');
            $('.jcarousel-control-prev').css('visibility', 'hidden');
            $('.jcarousel-control-next').css('visibility', 'hidden');
        }
    }
    else{
        if(!$('.jcarousel').attr('data-jcarousel')){ // check if jcarousel has been created already
            $('.jcarousel').removeClass('jcarousel-disabled').jcarousel();
            $('.jcarousel-control-prev').css('visibility', 'visible');
            $('.jcarousel-control-next').css('visibility', 'visible');
        }
    }
};