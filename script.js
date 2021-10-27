$(function () {
  var $current,leftPos,newWidth;
  $("#main-nav").append("<li id='pill'></li>");
  var $pill = $("#pill");
  function pillAnimation(){
    
    $pill
        .width($(".current").width())
        .height($("#main-nav").height())
        .css("left", $(".current a").position().left)
        .data("originalLeft", $(".current a").position().left)
        .data("originalWidth", $pill.width())
        .data("originalColor", $(".current a").attr("rel"));
    $curr = $(".current a");
    $("#main-nav li")
        .find("a")
        .hover(
            function () {
                $current = $(this);
                newWidth = $current.parent().width();
                leftPos = $current.position().left;
                $pill.css("left", leftPos);
                $pill.css("width", newWidth);
                $pill.css("backgroundColor", $current.attr("rel"));
                $current.css("color", "black");

               
            },
            

            function () {
              $pill.css("left", $pill.data("originalLeft"));
              $pill.css("width", $pill.data("originalWidth"));
              $pill.css("backgroundColor", $pill.data("originalColor"));
              $current.css("color", "white");

            }
        );
  };
  pillAnimation();

  
  var home_position = $('main .home').offset().top;
  var about_position = $('main .about').offset().top;
  var skills_position = $('main .skills').offset().top;
  var education_position = $('main .education').offset().top;

  var screen_height = $(window).height();
  var activation_offset = 0.2;//determines how far up the the page the element needs to be before triggering the function
  
  var home_AP = home_position - (screen_height * activation_offset);
  var about_AP = about_position - (screen_height * activation_offset);
  var skills_AP = skills_position - (screen_height * activation_offset);
  var education_AP = education_position - (screen_height * activation_offset);
  var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer

  // Does something when user scrolls to it OR
  // Does it when user has reached the bottom of the page and hasn't triggered the function yet
  $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;

      var home_in_view = y_scroll_pos > home_AP;
      var about_in_view = y_scroll_pos > about_AP;
      var skills_in_view = y_scroll_pos > skills_AP;
      var education_in_view = y_scroll_pos > education_AP;

      // var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;
      if(home_in_view ) {
          $('.current').removeClass("current");
          $('#main-nav #home').parent().addClass("current");
          $('.main-nav a').css("color", "white");
          $('.current a').css("color", "black");
          pillAnimation();
        }
      if(about_in_view ) {
          $('.current').removeClass("current");
          $('#main-nav #about').parent().addClass("current");
          $('.main-nav a').css("color", "white");
          $('.current a').css("color", "black");
          pillAnimation();

      }
      if(skills_in_view ) {
          $('.current').removeClass("current");
          $('#main-nav #skills').parent().addClass("current");
          $('.main-nav a').css("color", "white");
          $('.current a').css("color", "black");
          pillAnimation();

      }
      if(education_in_view) {
        $('.current').removeClass("current");
        $('#main-nav #education').parent().addClass("current");
        $('.main-nav a').css("color", "white");
        $('.current a').css("color", "black");
        pillAnimation();

      }
  });
   
        $(".skill").hover(
          function () {
            $(".skill").css('animation-play-state', 'paused');
            $(".skillOrbit").css('animation-play-state', 'paused');
            $(this).css('color', 'black');
            $(this).css('background-color', 'white');
            $(this).css('font-size', 'larger');
          }, function () {
            $(".skill").css('animation-play-state', 'running');
            $(".skillOrbit").css('animation-play-state', 'running');
            $(this).css('color', 'white');
            $(this).css('background-color', 'rgb(58, 57, 57)');
            $(this).css('font-size', 'medium');
          }
        );

});
