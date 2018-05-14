// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

$('#success').css('display','none')
//onclick
$( "#submitComment" ).click(function() {
  alert( "Handler for .click() called." );
  var comment = $('#comment').val()
  var obj = {comment : comment}

      $.ajax({
    type: "POST",
    url: "/rests/gastromaquia",
    data: obj,
    success: function(data){
          $('#success').css('display','block')
    }
    // dataType: dataType
    });

});



});
