  $(function () {
    counter = function (ele, help_ele, max_chars, is_words) {
      var value = $(ele).val();

      if (value.length == 0) {
        $(help_ele).html(0 + "/" + max_chars + " " + (is_words ? "words" : "characters"));
        return;
      }

      var regex = /\s+/gi;
      var wordCount = value.trim().replace(regex, ' ').split(' ').length;
      var charCount = value.trim().length;


      $(help_ele).html((is_words ? wordCount : charCount) + "/" + max_chars + " characters");
    };

    update_about = function () {
      var help_ele = $(".startup_about p.help-block");
      var ele = $(".startup_about #startup_about");
      counter(ele, help_ele, #{Startup::MAX_ABOUT_CHARACTERS})
    };

    $(".startup_about #startup_about").click(update_about).change(update_about).keydown(update_about).keypress(update_about).keyup(update_about).blur(update_about).focus(update_about);

    limit_length = function(element, length) {
      if (element.value.length > length)
        element.value = element.value.slice(0, length);
    };

    $('input[data-max-int-length]').keyup(function() {
      var maxIntLength = parseInt(this.getAttribute("data-max-int-length"));
      limit_length(this, maxIntLength);
    });

    $('input[data-max-int-length]').on('paste', function () {
      var element = this;
      var maxIntLength = parseInt(this.getAttribute("data-max-int-length"));
      setTimeout(function () {
        limit_length(element, maxIntLength);
      }, 100);
    });
  });
