  $(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.center-block');
   var offset = startchange.offset();
   $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('#navbar-collapsed').css('background-color', '#fafafa');
    } else {
      $('#navbar-collapsed').css('background-color', 'transparent');
    }
  });
 });