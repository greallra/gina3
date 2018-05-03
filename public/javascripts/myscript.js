window.onload = function(){
  $('#12').click(function() {
  $('#outline').toggleClass('outDisplay')

});
//menus opens onclick
$('i').click(function() {
$('.header ul').toggleClass('toggleNav');

});

//menus opens onclick
$( ".blogPostsLi" ).first().click(function() {
  if($(".sub-menu").hasClass('sub-menu-active')){
    $(".sub-menu").fadeOut().removeClass( "sub-menu-active" );

  }else{
    $(".sub-menu").fadeIn().addClass('sub-menu-active')
  }


});



//nav
$('.icon').click(function() {
myFunction();
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
}//window
