/* Animation */

/*
function myMove() {
    var elem = document.getElementById("warning")
    var pos = 0;
    var id = setInterval(frame,10);
    function frame() {
        if (pos == 350) {
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
*/
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
