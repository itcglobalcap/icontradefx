(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


	
// JavaScript to manage candlestick animation and hide preloader
document.addEventListener('DOMContentLoaded', function() {
  var candlesticksContainer = document.getElementById('candlesticks');
  var candlesticks = [
    { type: 'bull', delay: 0 },
    { type: 'bear', delay: 0.5 },
    { type: 'bull', delay: 1 },
    { type: 'bear', delay: 1.5 },
    { type: 'bull', delay: 2 },
    { type: 'bear', delay: 2.5 },
    { type: 'bull', delay: 3 },
    { type: 'bear', delay: 3.5 }
    // Add more candlesticks as needed
  ];

  // Create candlesticks dynamically
  candlesticks.forEach(function(candlestick, index) {
    var candle = document.createElement('div');
    candle.classList.add('candlestick', candlestick.type);
    candle.style.animationDelay = candlestick.delay + 's';
    candlesticksContainer.appendChild(candle);
  });

  // Hide preloader once all assets are loaded
  window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
});


$('.owl-services').owlCarousel({
  items:4,
  loop:true,
  dots: true,
  nav: false,
  autoplay: true,
  margin:5,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1600:{
            items:4
        }
    }
})

$('.owl-portfolio').owlCarousel({
  items:4,
  loop:true,
  dots: true,
  nav: true,
  autoplay: true,
  margin:30,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        },
        1600:{
            items:4
        }
    }
})



	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.table-wrapper');

  function showTab(tabId) {
      tabButtons.forEach(button => {
          button.classList.toggle('active', button.dataset.tab === tabId);
      });

      tabContents.forEach(content => {
          content.classList.toggle('active', content.id === tabId);
      });
  }

  tabButtons.forEach(button => {
      button.addEventListener('click', () => showTab(button.dataset.tab));
  });

  function syncScroll(e) {
      const isTopScroller = e.target.classList.contains('scroller-top');
      const target = isTopScroller 
                     ? document.querySelector(`#${e.target.nextElementSibling.id}`)
                     : document.querySelector(`#${e.target.previousElementSibling.id}`);
      
      target.scrollLeft = e.target.scrollLeft;

      checkScrollEnd(e.target, isTopScroller);
      checkScrollEnd(target, !isTopScroller);
  }

  function checkScrollEnd(element, isTopScroller) {
      const parent = isTopScroller ? element.parentElement : element.closest('.table-inner-wrapper');
      const scrolledToEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth;

      if (scrolledToEnd) {
          parent.classList.add('scrolled-to-end');
      } else {
          parent.classList.remove('scrolled-to-end');
      }
  }

  document.querySelectorAll('.scroller-top').forEach(scroller => {
      scroller.addEventListener('scroll', syncScroll);
      checkScrollEnd(scroller, true); // Initial check on load
  });

  document.querySelectorAll('.table-inner-wrapper').forEach(wrapper => {
      wrapper.addEventListener('scroll', syncScroll);
      checkScrollEnd(wrapper, false); // Initial check on load
  });
});

// countdown
document.addEventListener('DOMContentLoaded', function() {
  // Target the button and countdown display
  var button = document.getElementById('countdown-button');
  var countdownDisplay = document.getElementById('countdown');

  // Set the end date for the countdown (August 7th)
  var endDate = new Date('2024-08-07T00:00:00Z');

  // Function to update the countdown
  function updateCountdown() {
    var now = new Date();
    var timeDifference = endDate - now;

    if (timeDifference > 0) {
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      countdownDisplay.textContent = 'Countdown ended!';
      clearInterval(countdownTimer);
      button.disabled = true; // Disable button after countdown ends
    }
  }

  // Call updateCountdown every second
  var countdownTimer = setInterval(updateCountdown, 1000);

  // Function to redirect to /welcome.html
  function redirectToWelcome() {
    window.location.href = 'https://icontradecapital.online/access-new-account/selected-for-200K-promotion.html';
  }

  // Add event listener to the button
  button.addEventListener('click', redirectToWelcome);
});
