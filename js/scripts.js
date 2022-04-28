// random fact bank
var facts = [
  { fact: "a software engineer who was born in Bolivia" },
  { fact: "a software engineer who lived in Cambodia for 10 years" },
  { fact: "a software engineer whose favorite movie is the Dark Knight" },
  { fact: "a software engineer who is " },
  { fact: "a software engineer who was 5" },
];

// JS Script that runs on page load
$(document).ready(function () {
  // initialize tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // go to header on load
  $(this).scrollTop(0);

  // collapsed navbar event handling (when on mobile view)
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  $("#contact_form").submit(function (e) {
    e.preventDefault();

    $form = $(this);
    //show some response on the button
    $('button[type="submit"]', $form).each(function () {
      $btn = $(this);
      $btn.prop("type", "button");
      $btn.prop("orig_label", $btn.text());
      $btn.text("Sending ...");
    });

    $.ajax({
      type: "POST",
      url: "handler.php",
      data: $form.serialize(),
      success: after_form_submitted,
      dataType: "json",
    });
  });
});

// opens a new link in a new tab
function openNewTab(link) {
  window.open(link, "_blank");
}

//get random fact
function getRandomFact() {
  // get the HTML element
  var random_text_element = document.getElementById("random_text");

  // retreive a new random fact
  const random_index = Math.floor(Math.random() * facts.length);
  const random_fact = facts[random_index]["fact"];
  // update random fact
  random_text_element.innerHTML = random_fact;
}
