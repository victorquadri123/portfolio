$(document).ready(function() {
    // Add the hover effect to the .icon elements
    $(".icon").hover(function(){
      $("span").animate({right: '50px'});
    }, function(){
      $("span").animate({right: '0px'});
    });

    let counterStarted = false; 

    $(window).on('scroll', function() {
      const scrollPos = $(window).scrollTop();
      const placeOffset = $('.place').offset().top - window.innerHeight;
  
      if (scrollPos > placeOffset && !counterStarted) {
        counterStarted = true;
  
    
        const duration = 2000;
  
        $('.place .counter').each(function() {
          const $counter = $(this);
          const target = +$counter.data('target');
          const incrementTime = 20; 
          const totalIncrements = duration / incrementTime; 
          const incrementValue = target / totalIncrements;
  
          let count = 0; 
  
          const updateCount = () => {
            count += incrementValue;
  
            if (count < target) {
              $counter.text(Math.ceil(count));
              setTimeout(updateCount, incrementTime); 
            } else {
              $counter.text(target);
            }
          };
  
          updateCount(); 
        });
      }
    });

     // When the menu is clicked, open the navigation panel
    $('.menu').click(function() {
      $('#nav-panel').css('width', '270px');
    });

    // When the close button is clicked, close the navigation panel
    $('.close-btn').click(function() {
      $('#nav-panel').css('width', '0');
    });

  });
  