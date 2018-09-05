function hideWhenClicked(obj) {
   var el = document.getElementById(obj);
    el.style.display = 'none';
  }

  $(document).ready(function() {
    hideWhenClicked();
