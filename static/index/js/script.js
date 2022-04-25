
$(function(){
    if ( $(window).width() < 768 ) {
        $('.nav-acc').css({'display':'none'});
        $('.b-icon').click(function(){
           $(this).parent().find('.nav-acc').slideToggle(500)
        });
    }
  });




$('.accordion').css({'display':'none'});  
$('.f-s-btn').click(function(){
   $(this).parent().find('.accordion').slideToggle(500)
   $(this).parent().find('.f-s-btn').css({'display':'none'})
});

$('.s-s-btn').click(function(){
    $(this).parent().find('.accordion').slideToggle(500)
    $(this).parent().find('.s-s-btn').css({'display':'none'})
 });

 $('.t-s-btn').click(function(){
    $(this).parent().find('.accordion').slideToggle(500)
    $(this).parent().find('.t-s-btn').css({'display':'none'})
 });