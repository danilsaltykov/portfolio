$(document).ready(function(){


    let $hero = $(".hero");
    let $laser = $hero.find('.laser');

    $laser.removeClass('laser');
    function scan()  {

        $hero.removeClass('idle').addClass('attack');

        $laser.addClass('laser');
        setTimeout(function(){
            $hero.removeClass('attack').addClass('idle');
            $laser.removeClass('laser');
        }, 4000);
}
        
        setInterval(scan, 6000 );

      

        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 300) $('.header').addClass('fixed');
                  else $('.header').removeClass('fixed');
            });


});