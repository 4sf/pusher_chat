$(function(){

  console.log("Pusher talk로 옮겨옴");

  Pusher.logToConsole = true;

  var pusher = new Pusher('9a394c4442319553e062', {
    cluster: 'ap1',
    encrypted: true
  });

  $('#talk_submit').click(function(){
    alert("hi");

    $.ajax({
      data: { msg: $('#msg').val()},
      url: "/talk",
      success: function(){
        $('#msg').val("");
        $('#msg').focus();
      }
    });
  });

  var channel = pusher.subscribe('odk410');
  channel.bind('hello', function(data) {
    var text = data.message;
    $('#talks').append("<p>" + text + "</p>");
  });
})
