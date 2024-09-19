$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});
$(document).ready(function() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);

    $('.navbar-nav li.nav-item a').each(function() {
        var href = $(this).attr('href');
        if (url === href || (url === '' && href === '/')) {
            $(this).parent().addClass('active');
        }
    });
});
// //Service carousel
// $(document).ready(function(){
//   console.log("script.js executed");
//   $('#services .owl-carousel').owlCarousel({
//       loop: true,
//       margin: 10,
//       center: true,
//       nav: true,
//       dots: true,
//       responsive: {
//           0: {
//               items: 1
//           },
//           600: {
//               items: 2
//           },
//           1000: {
//               items: 3
//           }
//       }
//   });
// });

      
// //   Lenis
// const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// //Service carousel
// $('#services .owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     center: true,
//     nav:true,
//     dots:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })


// //advantages accordion
// $(document).ready(function() {
//   $('.accordion-button').click(function() {
//     var target = $($(this).attr('data-bs-target'));
    
//     // Remove custom class from all buttons and hide all content
//     $('.accordion-button').removeClass('active-button'); // Custom class for active button
//     $('.accordion-collapse').removeClass('show');
    
//     if (target.hasClass('show')) {
//       // If target is already visible, just hide it and reset button class
//       target.removeClass('show');
//     } else {
//       // Show the new target and apply custom class to the clicked button
//       target.addClass('show');
//       $(this).addClass('active-button');
//     }
//   });
// });

// //Testimonial carousel
// $('#testi .owl-carousel').owlCarousel({
//     loop:false,
//     margin:10,
//     nav:true,
//     dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:2
//         }
//     }
// })    