// Humburger menu 
$(function () {

    
    $(".humburger").click(function () {

      $("ul").toggleClass("active");

    });
    
  });

// Humburger menu 

//...................Sticky Navbar starts ...............//




   $(function(){

    $(window).on('scroll', function(){

        if ($(window).scrollTop ()){

            $('nav').addClass('nav-white');
        }
    
    
        else{
            $('nav').removeClass('nav-white');
        }
    
    })





   });

//...................Sticky Navbar Ends ...............//









// owlCarousel  1 starts
$('.my-owl-custom').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayTimedelay:10000,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1 
        },
        600:{
            items:1
        },
         
        1000:{
            items:1
        }
    }
})

// owlCarousel 1 ends


// owlCarousel starts 2
$('.owl-carousel-two').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayTimedelay:10000,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },

        468:{
            items:1
        },


        768:{
            items:2
        },
        992:{
            items:4
        }
    }
})

// owlCarousel 2 ends









// owlCarousel starts 3
$('.owl-carousel-theree').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayTimedelay:10000,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        467:{
            items:1
        },

        767:{
            items:1
        },
        992:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// owlCarousel 3 ends



