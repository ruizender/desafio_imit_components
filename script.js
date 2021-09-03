$(document).ready(function () {
  $(".close").click(function () {
    $(".alert").fadeOut();
  });

  $("#firstButton").click(function () {
    $(".collapse").toggle("slow");
  });

  // $("#headingOne").click(function () {
  //   $("#collapseOne").toggle("slow");
  //   $("#collapseTwo").slideUp("slow");
  //   $("#collapseThree").slideUp("slow");
  // });

  // $("#headingTwo").click(function () {
  //   $("#collapseTwo").toggle("slow");
  //   $("#collapseOne").slideUp("slow");
  //   $("#collapseThree").slideUp("slow");
  // });

  // $("#headingThree").click(function () {
  //   $("#collapseThree").toggle("slow");
  //   $("#collapseOne").slideUp("slow");
  //   $("#collapseTwo").slideUp("slow");
  // });

  $(".collapsed").click(function () {
    // Aqui se guarda la clase en una variable
    let target = $($(this).data("target"));

    if (target.is(":visible")) {
      target.slideUp();
    } else {
      $(".collapse").slideUp();
      target.slideToggle("slow");
    }
  });
});
