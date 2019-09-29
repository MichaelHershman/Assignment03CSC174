function showTab(evt, sectionName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("sections");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-current", ""); 
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " is-current";
}