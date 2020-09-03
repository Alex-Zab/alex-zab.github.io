 // portfolio
 $('.portfolio ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.portfolio ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .portfolio ul').removeClass('item_open');
     return false;
 });

 $(".portfolio ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });