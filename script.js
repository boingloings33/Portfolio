jQuery(function () {
  $(".head").on("click", function () {
    let isActive = $(this).hasClass("active");

    $(".head").removeClass("active");
    $(".head").parent().find(".content").slideUp(280);
    $(".head").parent().find(".arrow").removeClass("arrow-animate");
    if (isActive === false) {
      $(this).addClass("active");
      $(this).parent().find(".arrow").addClass("arrow-animate");
      $(this)
        .parent()
        .find(".content")
        .slideDown(280, function () {
          this.closest(".accordion").scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        });
    }
  });
  $("img").on("mouseenter", function () {
    $("h1").toggle();
  });
  $("img").on("mouseleave", function () {
    $("h1").toggle(20);
  });
});
