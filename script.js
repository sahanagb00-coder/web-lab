
$(document).ready(function(){
  // Smooth fade-in effect
  $("section").hide().fadeIn(1200);

  // Highlight active nav link
  $("nav a").each(function(){
    if (this.href === window.location.href) {
      $(this).addClass("active");
    }
  });

  // Button click animation
  $(".btn").click(function(){
    $(this).fadeOut(200).fadeIn(200);
  });
});