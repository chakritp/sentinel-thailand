
$(document).ready(function(){
  //logo fade in
  $('.home').fadeIn(2000);

  //dynamic scrolling function
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

  //profile button
  $('.profile-btn').click(function(e) {
    e.preventDefault();
    $('.collapse').collapse('hide');
    $($(this).parent()).children('.collapse').collapse('show');
  })
});

//change from container to container fluid on smaller screens
$(window).on('resize', function () {
  if ($(window).width() < 997) { 
    $('.navbar.navbar-default.navbar-fixed-top > div').removeClass('container');
    $('.navbar.navbar-default.navbar-fixed-top > div').addClass('container-fluid');
  } 
  else {
    $('.navbar.navbar-default.navbar-fixed-top > div').removeClass('container-fluid');
    $('.navbar.navbar-default.navbar-fixed-top > div').addClass('container');
  }
});

//set mission and vision logos to align center on smaller screens and align right on big screens
$(window).on('resize',function(){
  if($(window).width() < 992) {
    //center the logo
    $('#vision-logo').removeClass('text-right');
    $('#vision-logo').addClass('text-center');
    $('#mission-logo').removeClass('text-right');
    $('#mission-logo').addClass('text-center');

    //center the text
    $('#vision').removeClass('text-left');
    $('#vision').addClass('text-center');
    $('#mission').removeClass('text-left');
    $('#mission').addClass('text-center');

    //remove the right buffer
    $('#vision-logo').removeClass('right-buffer-20px');
    $('#mission-logo').removeClass('right-buffer-20px');
  }
  else{ //bigger screens
    //right align the logo
    $('#vision-logo').removeClass('text-center');
    $('#vision-logo').addClass('text-right');
    $('#mission-logo').removeClass('text-center');
    $('#mission-logo').addClass('text-right');

    //left align the text
    $('#vision').removeClass('text-center');
    $('#vision').addClass('text-left');
    $('#mission').removeClass('text-center');
    $('#mission').addClass('text-left');

    //add the right buffer
    $('#vision-logo').addClass('right-buffer-20px');
    $('#mission-logo').addClass('right-buffer-20px');
  }

  //set mission/vision text to align center on smaller screens and align left on big screens
  // $(window).on('resize',function(){
  // if($(window).width() < 992) {
  //   $('#vision').removeClass('text-left');
  //   $('#vision').addClass('text-center');
  //   $('#mission').removeClass('text-left');
  //   $('#mission').addClass('text-center');
  // }
  // else{ //bigger screens
  //   $('#vision').removeClass('text-center');
  //   $('#vision').addClass('text-left');
  //   $('#mission').removeClass('text-center');
  //   $('#mission').addClass('text-left');
  // }


});