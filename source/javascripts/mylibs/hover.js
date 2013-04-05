$(document).ready(function(){
$(".hover_img").hover(function(){
     $(this).fadeTo(100,0.5);
    },
    function(){
      $(this).fadeTo(100,1.0);
    });
});