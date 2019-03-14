let login = document.getElementById('login');

login.onclick = function() {
  var github_worker = new gh();
  github_worker.interactiveSignIn();
};