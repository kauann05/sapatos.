$(document).ready(function() {
   
    
        $('#contrast-btn').click(function() {
          $('.container').toggleClass('contrast');
        });
      });
      
        var baseFontSize = parseInt($('body').css('font-size'));
        var baseHeadingSize = parseInt($('h3').css('font-size'));
      
        $('#font-increase-btn').click(function() {
          var currentFontSize = parseInt($('body').css('font-size'));
          var currentHeadingSize = parseInt($('h3').css('font-size'));
      
          $('body').css('font-size', currentFontSize + 2);
          $('h3').css('font-size', currentHeadingSize + 2);
        });
      
        $('#font-decrease-btn').click(function() {
          var currentFontSize = parseInt($('body').css('font-size'));
          var currentHeadingSize = parseInt($('h3').css('font-size'));
      
          $('body').css('font-size', currentFontSize - 2);
          $('h3').css('font-size', currentHeadingSize - 2);
        });
      
        $('#toggle-info-btn').click(function() {
          $('p').toggleClass('hidden');
        });
     


 