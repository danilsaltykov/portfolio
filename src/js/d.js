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

      

        $(window).on("scroll load resize", function() {
            if ($(window).scrollTop() > 300) $('.header').addClass('fixed');
                  else $('.header').removeClass('fixed');
            });



            $('#about').on("click", function(e){
                e.preventDefault();
                let aboutH = $("#skills").offset().top;
                
                $('html, body').animate({
                    scrollTop: aboutH - 70
                }, 500)
            });

            $('#portfolio').on("click", function(e){
                e.preventDefault();
                let mainH = $("#works").offset().top;
                
                $('html, body').animate({
                    scrollTop: mainH - 100
                }, 500)

               
            });

            $('#contact').on("click", function(e){
                e.preventDefault();
                let contactH = $("#contacts").offset().top;
                
                $('html, body').animate({
                    scrollTop: contactH - 50
                }, 500)

            });

          

            $('#main').on("click", function(e){
                e.preventDefault();
                let mainH = $("#header").offset().top;
                
                $('html, body').animate({
                    scrollTop: mainH - 50
                }, 500)

            });

});