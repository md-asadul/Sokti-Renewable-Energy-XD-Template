jQuery(document).ready(function($){

	// $( document ).ready(function() {
	// 	$('[data-sidenav]').sidenav();
	// });
  // $('.close-menu').on( "click", function() {
  //   // alert("test");
  //   $('.sidenav-overlay').hide();
  //   $('body').removeClass("sidenav-no-scroll");
  //   $('#navbar').removeClass("show");
  // });
    $(function(){
        $('.selectpicker').selectpicker();
    });
    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 600) {
    //        $('.navbar-fixed-top').addClass('newBg');
    //     } else {
    //        $('.navbar-fixed-top').removeClass('newBg');
    //     }
    // });
	 //Banner slider
	 $('.banner__slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,
    });
    //   $('.featured-podcasts-slider').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     autoplay: false,
    //     slidesToShow: 5,
    //     accessibility: true,
	// 	variableWidth: false,
	// 	focusOnSelect: false,
	// 	centerMode: false,
    //     prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    //     nextArrow: '<button class="slide-arrow next-arrow"></button>'
    //   });
    // function featuredSlider(){
        const $status = $('.pagingInfo');
        const $slickElement = $('.featured-podcasts-slider');

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) { 
        if(!slick.$dots){
            return;
        }
        
        const i = (currentSlide ? currentSlide : 0) + 1;
        console.log("new css style", i);
        $status.html('<b>' + i + '</b>'   + '/' + (slick.$dots[0].children.length));
        });

        $slickElement.slick({
            dots: true,
            infinite: true,
            speed: 300,
            autoplay: false,
            slidesToShow: 5,
            accessibility: true,
            variableWidth: false,
            focusOnSelect: false,
            centerMode: false,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
              },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '60px',
                  },
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '60px',
                  },
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '60px',
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                  },
                }
              ],
        });
    // }
    // return featuredSlider();

    
    // function socialMedia(){
        const $status2 = $('.pagingInfoMedia');
        const $slickElement2 = $('.social-media');

        $slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) { 
        if(!slick.$dots){
            return;
        }
        
        const i = (currentSlide ? currentSlide : 0) + 1;
        console.log("new css style", i);
        $status2.html('<b>' + i + '</b>'   + '/' + (slick.$dots[0].children.length));
        });

        $slickElement2.slick({
            dots: true,
            infinite: true,
            speed: 300,
            autoplay: false,
            slidesToShow: 3, 
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                },
              },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  },
                }
              ],
        });
    // }
    // return socialMedia();
        

    $('.blog-gallery-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 2,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        prevArrow: false,
        nextArrow: false
      });

    // ul li convert to select option in mobile 
    $(function() {
        
      // Create the dropdown base
      $("<select />").appendTo(".cat-menu");
      
      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Select one"
      }).appendTo(".cat-menu select");
      
      // Populate dropdown with menu items
      $(".cat-menu a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo(".cat-menu select");
      });
      
      $(".cat-menu select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
    });

    // pagingInfoChannel
    const $status3 = $('.pagingInfoChannel');
    const $slickElement3 = $('.channel-slider');

    $slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) { 
    if(!slick.$dots){
        return;
    }
    
    const i = (currentSlide ? currentSlide : 0) + 1;
    console.log("new css style", i);
    $status3.html('<b>' + i + '</b>'   + '/' + (slick.$dots[0].children.length));
    });

    $slickElement3.slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        slidesToShow: 6,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              centerMode: true,
              centerPadding: '60px',
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '40px',
            },
          }
        ],
      });

    $('.nav-mobile').click(function(){
        $('.nav-desktop').css('left', 0);
    });
    $('.nav-mobile-close').click(function(){
        $('.nav-desktop').css('left', '100%');
    });



    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the header
    var header = document.querySelector(".home-header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }
}(jQuery));	


 
