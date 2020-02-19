/*
$(document).ready(function(){
    $(".scroll-down").click(function(){
        $("body,html").animate({
          scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
       
      })
    })
*/

/*scroll*/
const aboutBtn = document.querySelector(".about-btn");
const aboutPage = document.querySelector(".about");
const upBtn = document.querySelector(".to-top-btn");
const mainPage = document.querySelector(".main-page");

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

aboutBtn.addEventListener('click', () => {
  scrollTo(aboutPage);
});

upBtn.addEventListener('click', () => {
  scrollTo(mainPage);
});


/*hide preloader*/  
const pre = document.querySelector('.preloader');
window.onload = hidePre;

 function hidePre() {
   pre.classList.add('hide');
   document.body.style.overflow = "visible";
 }
