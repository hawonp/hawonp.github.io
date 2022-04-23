// mdc.ripple.MDCRipple.attachTo(document.querySelector(".foo-button"));

$(document).ready(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
function openNewTab(link) {
  window.open(link, "_blank");
}
