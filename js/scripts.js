// mdc.ripple.MDCRipple.attachTo(document.querySelector(".foo-button"));

$(document).ready(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $(this).scrollTop(0);
  var activeNavItem = $(".nav-item");

  activeNavItem.click(function () {
    activeNavItem.removeClass("active");
    $(this).addClass("active");
  });

  $("#see_more_btn").addEventListener("click", function () {
    // var activeNavItem = $(".nav-item");
    // activeNavItem.removeClass("active");
    // $("#about_me").addClass("active");
  });
});
function openNewTab(link) {
  window.open(link, "_blank");
}

// <!-- onclick="document.getElementById('about_me').scrollIntoView();" -->
