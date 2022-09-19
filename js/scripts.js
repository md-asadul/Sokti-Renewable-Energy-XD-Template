$(document).ready(function(){
    
  $(".service .owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      margin: 15,
      slideSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      resonsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
          0 : {
              items: 1
          },
          768 : {
              items: 2
          },
          1000 : {
              items: 3
          },
          1200 : {
              items: 4
          },
          1920 : {
              items: 4
          }
      }
  });  

  // wow = new WOW();
  // wow.init();
    
});

/*second owlCarousel area*/
$(document).ready(function(){
    
    $(".project .owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        nav:true,
        slideSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        resonsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            1000 : {
                items: 2
            },
            1200 : {
                items: 3
            },
            1920 : {
                items: 3
            }
        }
    });  
  
    // wow = new WOW();
    // wow.init();
      
  });
/* customer-feedback-area start*/

$(document).ready(function(){
    
  $(".customer .owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      margin: 15,
      slideSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      resonsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
          0 : {
              items: 1
          },
          768 : {
              items: 2
          },
          1000 : {
              items: 3
          },
          1200 : {
              items: 3
          },
          1920 : {
              items: 4
          }
      }
  });  

  // wow = new WOW();
  // wow.init();
    
});
/* customer-feedback-area End */


// $(document).ready(function(){
    
//   $(" #customer-feedback-area .owl-carousel").owlCarousel({
//       loop: true,
//       dots: false,
//       nav: true,
//       margin: 15,
//       slideSpeed: 1000,
//       autoplay: true,
//       autoplayTimeout: 3000,
//       autoplayHoverPause: true,
//       resonsiveClass: true,
//       responsiveRefreshRate: true,
//       responsive: {
//           0 : {
//               items: 1
//           },
//           768 : {
//               items: 2
//           },
//           1000 : {
//               items: 3
//           },
//           1200 : {
//               items: 3
//           },
//           1920 : {
//               items: 4
//           }
//       }
//   });  

//   // wow = new WOW();
//   // wow.init();
    
// });

/*news-feed-area start*/
$(document).ready(function(){
    
  $(".news .owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      margin: 15,
      slideSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      resonsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
          0 : {
              items: 1
          },
          768 : {
              items: 2
          },
          1000 : {
              items: 3
          },
          1200 : {
              items: 3
          },
          1920 : {
              items: 4
          }
      }
  });  

  // wow = new WOW();
  // wow.init();
    
});
/*news-feed-area end*/

 $('#exampleModal').on('shown.bs.modal', function () {
  $('#video1')[0].play();
  })
  $('#exampleModal').on('hidden.bs.modal', function () {
  $('#video1')[0].pause();
});


 
