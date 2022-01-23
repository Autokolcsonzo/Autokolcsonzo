$(function(){
    let zarva = false;
    $( "#dropdown_arrow" ).on( "click", function() {
        if(zarva){
            $("#dropdown_arrow").css("transform", "rotate(90deg)");
            $("#dropdown_kereso").slideUp( ["200ms" ] ["easing" ] );
            zarva = false;
        }else if(!zarva){
            $("#dropdown_arrow").css("transform", "rotate(270deg)");
            $("#dropdown_kereso").slideDown( ["200ms" ] ["easing" ] );
            $("#dropdown_kereso").css("display", "flex");
            zarva = true;
        }
      });

});