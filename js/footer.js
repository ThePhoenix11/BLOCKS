 //Get the button:
 mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () { scrollFunction() };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }
 $(document).ready(function () {
     $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('#scroll').fadeIn();
         } else {
             $('#scroll').fadeOut();
         }
     });
     $('#scroll').click(function () {
         $("html, body").animate({ scrollTop: 0 }, 600);
         return false;
     });
 });