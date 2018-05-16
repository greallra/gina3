window.onload = function(){
  $('#12').click(function() {
  $('#outline').toggleClass('outDisplay')

});


//link home button to home page on onclick

$( "#home" ).click(function( event ) {
 window.location.replace("/");
});


//nav
$(".main-menu li").click(function() {
  $('.sub-menu').not($(this).children()).hide(); //hides submenus children except one clicked
     $(this).children().not($( "#home" )).fadeToggle();
   });
   //anthing clicked except li will close sub menus
   $('body').click(function(event) {
     if($(event.target).is('li')){
            return;

          }else{
                $('.sub-menu').hide();
          }
      });


$('.icon').click(function() {
  if ($('.main-menu').is(':visible')) {
    $('.main-menu').fadeOut( 1000 );
} else {
  $('.main-menu').fadeIn( 1000 );
}

});




}//window
