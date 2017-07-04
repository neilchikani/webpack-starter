$(document).ready(function () {
  $.ajax({
    url: "https://reqres.in/api/users/2",
    type: "GET",
    success: function(response, textStatus){
      console.log(response, textStatus);
    }
  });
});