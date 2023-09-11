jQuery(function () {
  $(".head").on("click", function () {
    let isActive = $(this).hasClass("active");
    this.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    $(".head").removeClass("active");
    $(".head").parent().find(".content").slideUp(280);
    $(".head").parent().find(".arrow").removeClass("arrow-animate");
    if (isActive === false) {
      $(this).addClass("active");
      $(this).parent().find(".arrow").addClass("arrow-animate");
      $(this).parent().find(".content").slideDown(280);
    }
  });
  $("img").on("mouseenter", function () {
    $("h1").toggle();
  });
  $("img").on("mouseleave", function () {
    $("h1").toggle(20);
  });
});
