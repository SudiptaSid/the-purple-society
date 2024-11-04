// Leadership Slider

$(document).ready(function () {

$(".counter").each(function () {

  var $this = $(this),
    countTo = $this.attr("data-count");
  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 5000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});

});

$(".leadership-slider").owlCarousel({
  margin: 0,
  items: 1,
  dots: true,
  nav: false,
  navText: [
    "<span class='fa fa-angle-left'></span>",
    "<span class='fa fa-angle-right'></span>",
  ],
  loop: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  smartSpeed: 2000,
  autoplayTimeout: 4000,
  autoplay: true,
  autoplayHoverPause: true,
  responsiveClass: false,
});

// Support Slider
$(".support-slider").owlCarousel({
  margin: 32,
  items: 3.5,
  dots: false,
  nav: false,
  navText: [
    "<span class='fa fa-angle-left'></span>",
    "<span class='fa fa-angle-right'></span>",
  ],
  loop: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  smartSpeed: 2000,
  autoplayTimeout: 4000,
  autoplay: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 0,
    },
    600: {
      items: 3,
      margin: 24,
    },
    1000: {
      items: 3.5,
    },
  },
});

// Login Slider
$(".login-slider").owlCarousel({
  margin: 0,
  items: 1,
  dots: true,
  nav: true,
  navText: [
    "<span class='fa fa-angle-left'></span>",
    "<span class='fa fa-angle-right'></span>",
  ],
  loop: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  smartSpeed: 2000,
  autoplayTimeout: 4000,
  autoplay: true,
  autoplayHoverPause: true,
  responsiveClass: false,
});

// Tutorial Slider
$(".tuts-slider").owlCarousel({
  margin: 0,
  items: 1,
  dots: true,
  nav: false,
  navText: [
    "<span class='fa fa-angle-left'></span>",
    "<span class='fa fa-angle-right'></span>",
  ],
  loop: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  smartSpeed: 2000,
  autoplayTimeout: 4000,
  autoplay: false,
  autoplayHoverPause: true,
  responsiveClass: false,
});

// Question Slider
$(".question-slider").owlCarousel({
  margin: 0,
  items: 1,
  dots: false,
  nav: true,
  navText: [
    "<span class='fa fa-angle-left'></span>",
    "<span class='fa fa-angle-right'></span>",
  ],
  loop: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  smartSpeed: 2000,
  autoplayTimeout: 4000,
  autoplay: false,
  autoplayHoverPause: true,
  responsiveClass: false,
});

// Thumbnail Slider
$(document).ready(function () {
  var bigimage = $("#big-slider");
  var thumbs = $("#thumbs-slider");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: true,
      dots: false,
      loop: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function () {
      thumbs.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: 10,
      loop: true,
      dots: false,
      margin: 20,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 1,
      responsiveClass: true,
      responsive: {
        0: {
          margin: 5,
          items: 6,
        },
        767: {
          margin: 10,
          items: 8,
        },
        991: {
          margin: 15,
          items: 10,
        },
      },
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs.find(".owl-item.active").first().index();
    var end = thumbs.find(".owl-item.active").last().index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }
  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }
  thumbs.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});

// Mobile Menu
$(function () {
  $(".mobile-menu-toggle").click(function () {
    $("body").addClass("overflown");
    $(".mobile-menu").addClass("active");
  });
  $(".mobile-menu-close").click(function () {
    $("body").removeClass("overflown");
    $(".mobile-menu").removeClass("active");
  });
});

// Stat Counter


// Phone
$(document).ready(function () {
  $(".input-phone").intlInputPhone();
});

// On Page Load Open Modal
$(document).ready(function () {
  //$("#tutsModal").modal("show");
});
// $(document).ready(function () {
//   $("#questionModal").modal("show");
// });
$(document).ready(function () {

  var data = getCookie("purple_cookie");
  //document.cookie = "purple_cookie=wepurple; expires=Thu,20 Nov 2018 12:00:00 UTC; path=/";
  if(data == "" || data == undefined){ 
  
    document.cookie = "purple_cookie=wepurple; max-age=" + 3000*24*60*60;
    $("#tutsModal").modal("show");
  }

  $("#next_slide").click(function () {
    var $dots = $('.owl-dot');
    var $next = $dots.filter('.active').next();

    if (!$next.length)
        $next = $dots.first();

    $next.trigger('click');
  });

  $("#skip").click(function () {
    $("#tutsModal").modal("hide").html('');
  });

  $("#tutsModal").on("hidden.bs.modal", function () {
    $("#tutsModal").html('');
});


});