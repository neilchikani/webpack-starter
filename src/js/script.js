$(document).ready(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 100) {
    $(".header").addClass("header-animate");
  }
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 100) {
      $(".header").addClass("header-animate");
    } else {
      $(".header").removeClass("header-animate");
    }
  });
  if (location.hash) {
    $("body, html").animate({
      scrollTop: $(location.hash).offset().top - $('.header').height()
    }, "ease-in");
  }
  $("a[data-scroll]").on("click", function (event) {
    event.preventDefault();
    if ($(this).attr('data-scroll')) {
      $("body, html").animate({
        scrollTop: $('#' + $(this).attr('data-scroll')).offset().top - $('.header').height()
      }, "ease-in");
    }
  });
  $(document).on("click", ".navigation.open a", function (event) {
    //event.preventDefault();
    //console.log($(this).parents('.navigation'));
    $(this).parents('.navigation').removeClass('open');
    $("#nav-icon").removeClass("open");
    $(".header").removeClass("open");
    $("body").removeClass("overflow-hidden");
  });

  $(document).on("click", "#nav-icon", function () {
    $(this).toggleClass('open');
    $('.navigation').toggleClass('open');
    $(".header").toggleClass("open");
    $("body").toggleClass("overflow-hidden");
  });

});