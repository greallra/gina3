window.onload = function(){
  $('#12').click(function() {
  $('#outline').toggleClass('outDisplay')

});


$('.main-menu li').click(function() {
  // $('.sub-menu').css('display','none');

$(this).find('ul').fadeToggle();

});

// $( ".main-menu li" ).hover(
//   if($('.sub-menu').is(":visible")) {
//     $( ".main-menu li" ).css('background', 'red')
//   }
// );


//nav


$('.icon').click(function() {
  if ($('.main-menu').is(':visible')) {
    $('.main-menu').fadeOut( 1000 );
} else {
  $('.main-menu').fadeIn( 1000 );
}

});


//link home button to home page on onclick
$('#home').click(function() {
  window.location.replace("/");
});

}//window
