(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // HOME SLIDER & COURSES & CLIENTS
    $('.home-slider').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      dots:false,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      nav: true,
      navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
      ]
    })

    // Services carousel
    $('.owl-services').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 2000,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 4,
        }
      },
      nav: true,
      navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
      ]
    });

    // Services accordion
    $('.owl-services').on('click','a', function(e){
      e.preventDefault();
      let serviceType = $(this).attr('class');

      if(!($(this).parents('.services-wrapper').find($('#'+serviceType)).css('display') === 'block')){
        $('#services').find('.services-wrapper .service-subpages').slideUp();
        $(this).parents('.services-wrapper').find($('#'+serviceType)).slideDown('slow');
        $('html, body').animate({
          'scrollTop' : $('.accordion-content').offset().top - 110
        });
      } else {
        $(this).parents('.services-wrapper').find($('#'+serviceType)).slideUp('slow'); 
      }
    });

    // Testimonial section
    $('.owl-client').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });

    // Download section
    $('.owl-downloads-section').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      dots:false,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 2000,
      nav: true,
      navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
      ]
    })



    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);
