document.addEventListener('DOMContentLoaded', function () {
  var chatInterface = document.querySelector('.chat-interface');
  var toggleModeButton = document.getElementById('toggleMode');
  var body = document.body;

  toggleModeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
  });

  // Your existing JavaScript code for chat functionality goes here
});
