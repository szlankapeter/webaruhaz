$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      const password = $('#password').val();
      if (password === 'test') {
        window.location.replace('hidowd98fe87wf.html');
      } else {
        alert('Wrong password! Please try again.');
      }
    });
  
  });