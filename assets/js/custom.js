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


	document.addEventListener('DOMContentLoaded', function() {
    var candlesticksContainer = document.getElementById('candlesticks');
    var infoMessage = document.getElementById('info-message');
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
  
    // Show the info message after 2 seconds
    setTimeout(function() {
      infoMessage.style.opacity = 1;
    }, 2000);
  
    // Hide preloader once all assets are loaded
    window.addEventListener('load', function() {
      var preloader = document.getElementById('preloader');
      var content = document.getElementById('content');
  
      // Add a class to fade out the preloader
      preloader.classList.add('fade-out');
  
      // Hide preloader and show content after the fade-out transition
      setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
      }, 500); // Match this duration with the CSS transition duration
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
  var endDate = new Date('2024-09-01T00:00:00Z');

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

// home script
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var glowText = document.querySelector('.glow-text');
    glowText.classList.add('start-shimmer');
  }, 100000); // 100 seconds delay
});

// story modal
var currentStoryIndex = 0;
var stories = [
  [
    '<img src="assets/images/demo-1.jpg" alt="Story 1.1">',
    '<img src="assets/images/p1.jpg" alt="Story 1.2">',
    '<img src="assets/images/p2.jpg" alt="Story 1.3">'
  ],
  '<img src="assets/images/p1.jpg" alt="Story 2">',
  '<img src="assets/images/p2.jpg" alt="Story 3">',
  '<img src="assets/images/p3.jpg" alt="Story 4">',
  '<img src="assets/images/p4.jpg" alt="Story 5">'
];

var intervalId; // Variable to store the interval ID for story rotation

function showStory(index) {
  // Clear any existing interval
  clearInterval(intervalId);

  // Show the modal
  if (index === 0) {
    currentStoryIndex = 0;
    showNextStory1(); // Start showing story 1 images
  } else {
    document.getElementById('storyContent').innerHTML = stories[index];
    document.getElementById('storyModal').style.display = 'block';
    startProgressBar();
    setTimeout(closeModal, 8000); // Close modal after 8 seconds
  }
}

function showNextStory1() {
  document.getElementById('storyContent').innerHTML = stories[0][currentStoryIndex];
  startProgressBar();
  currentStoryIndex = (currentStoryIndex + 1) % stories[0].length; // Move to next story
  intervalId = setInterval(showNextStory1, 8000); // Rotate stories every 8 seconds
}

function startProgressBar() {
  // Initialize progress bar
  var progressBar = document.createElement('div');
  progressBar.className = 'story-progress-bar';
  document.querySelector('.story-progress').appendChild(progressBar);

  // Update progress bar every second
  var startTime = Date.now();
  var duration = 8000; // 8 seconds
  var updateInterval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    var progress = (elapsedTime / duration) * 100;
    progressBar.style.width = progress + '%';

    if (elapsedTime >= duration) {
      clearInterval(updateInterval);
    }
  }, 1000); // Update every second
}

function closeModal() {
  clearInterval(intervalId); // Clear interval
  document.getElementById('storyModal').style.display = 'none';
  document.getElementById('storyContent').innerHTML = ''; // Clear the story content
  document.querySelector('.story-progress').innerHTML = ''; // Clear the progress bar
}

// read less script
 // read less footer script
 document.addEventListener("DOMContentLoaded", function() {
  var readMore = document.querySelector('.read-more');
  var readLess = document.querySelector('.read-less');
  var moreText = document.querySelector('.more-text');

  readMore.addEventListener('click', function() {
      moreText.style.display = 'inline';
      readMore.style.display = 'none';
      readLess.style.display = 'inline';
  });

  readLess.addEventListener('click', function() {
      moreText.style.display = 'none';
      readMore.style.display = 'inline';
      readLess.style.display = 'none';
  });
});

// Initialize slide behavior for pricing section
(function() {
  // Select the pricing slider container
  var slider = document.querySelector('.pricing-slider');

  // Function to handle smooth scroll behavior
  function smoothScrollTo(element, to, duration) {
    var start = element.scrollLeft,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  // Attach event listeners for left and right navigation (optional)
  // Example navigation buttons:
  // document.getElementById('scroll-left-button').addEventListener('click', function() {
  //   smoothScrollTo(slider, slider.scrollLeft - slider.clientWidth, 500);
  // });

  // document.getElementById('scroll-right-button').addEventListener('click', function() {
  //   smoothScrollTo(slider, slider.scrollLeft + slider.clientWidth, 500);
  // });

  // Easing function (optional) for smooth scrolling
  Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
})();

// Tidio Chat
 // Function to load the Tidio script after a delay
 function loadTidioChat() {
  var tidioScript = document.createElement('script');
  tidioScript.src = '//code.tidio.co/ahkgvgbh20eu6k161gm1zee57qurmq9u.js';
  tidioScript.async = true;
  document.body.appendChild(tidioScript);
}

// Set a timeout to load the Tidio script after 2 minutes (120000 milliseconds)
setTimeout(loadTidioChat, 120000);

// script home
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

// Shimmerwave Text
const target = document.getElementById('shimmerWave');
function splitTextToSpans(targetElement) {
    if (targetElement) {
        const text = targetElement.textContent;
        targetElement.innerHTML = '';
        for (let character of text) {
            const span = document.createElement('span');
            if (character === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = character;
            }
            targetElement.appendChild(span);
        }
    }
}
splitTextToSpans(target);

// Get the modal
var modal = document.getElementById("iconModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("icon-close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  var menuButton = document.querySelector('.menu-button');
  
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    menuButton.classList.remove('hide');
  } else {
    menu.classList.add('show');
    menuButton.classList.add('hide');
  }
}