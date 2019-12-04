function myFunction(x) {
  if (x.matches) { // If media query matches
    $('#about .isi').attr("data-aos","fade-right");
    $('#about .image-tentang').attr("data-aos","fade-left");
  } else {
    $('#about .isi').attr("data-aos","fade-up");
    $('#about .image-tentang').attr("data-aos","fade-up");
  }
}

var x = window.matchMedia("(min-width: 991px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
$(document).ready(function(){
  
});