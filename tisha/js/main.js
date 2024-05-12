(function ($) {
  "use strict";
  var input = $(".validate-input .input100");
  $(".validate-form").on("submit", function () {
    var check = true;
    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }
    return check;
  });
  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });
  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }
  function showValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass("alert-validate");
  }
  function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  // var countdownTo = 1655317800;
  var countdownTo = 1677868200;

  // Set up FlipDown
  var flipdown = new FlipDown(countdownTo)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
      console.log(window.location.hostname);
      // document.getElementById("countdown").style.display = "none";
      window.location.href = `https://rohcodes.com/tisha/cake.html`;
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle("light-theme");
  //   body.querySelector("#flipdown").classList.toggle("flipdown__theme-dark");
  //   body.querySelector("#flipdown").classList.toggle("flipdown__theme-light");
  // }, 5000);

  // Show version number
  var ver = document.getElementById("ver");
  ver.innerHTML = flipdown.version;
});
