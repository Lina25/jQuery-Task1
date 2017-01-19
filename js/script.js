$(function () {
  $("form[id='reg_form']").validate({
    rules: {
      name: {
        required: true,
        minlength: 5,
        maxlength: 30
      },
      date: {
        user_date: true
      },
        email: {
        required: true,
        email: true
      },
      ip: {
        user_ip: true,
      }
    },
      messages: {
      name: "Please enter your firstname",
      date: "Please enter a valid date",
      email: "Please enter a valid email address",
      ip: "Please enter a valid ip"
    },
      submitHandler: function (form) {
      form.submit();
    }
  });
});
$.validator.addMethod("user_date", function (value, element) {
  return value.match("([0-9]{4}[/](0[1-9]|1[0-2])[/]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[/](0[1-9]|1[0-2])[/][0-9]{4})");
});
$.validator.addMethod("user_ip", function (value, element) {
  return value.match(/^\d+\.\d+\.\d+\.\d+$/);
});