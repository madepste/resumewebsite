
n($,W,D)
{
var JQUERY = {};
JQUERY4U.UTIL =
{
setupFormValidation: function()
{
//form val rules
$("#register-form").validate({
rules:{
firstname: "required",
lastname: "required",
email: {
required:true,
email: true
},
password: {
required: true,
minlegnth: 8
},
agree: "required"
},
messages:{
firstname: "Please enter your firstname",
lastname: "Please enter your lastname",
password: {
required: "Please provide a password",
minlength: "Your password must be at least 5 characters long"
},
email: "Please enter a valid email address",
agree: "You must accept out terms and conditions"
},
submitHandler: function(form) {
form.submit();
}
});
}
}
//when the dom has loaded setup form val rules
$(D).ready(function($) {
JQUERY4U.UTIL.setupFormValidation();
});
})(jQuery, window, document);
