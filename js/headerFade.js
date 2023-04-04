$(window).scroll(function() {

    if ($(this).scrollTop() > 450) {
       $('nav').stop().fadeIn(800); 
   } else {$('nav').stop().fadeOut(800);
    };
});   