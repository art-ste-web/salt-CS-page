$(document).ready(function(){
    $(".scroll-down").click(function(){
        $("body,html").animate({
          scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
       
      })
    })