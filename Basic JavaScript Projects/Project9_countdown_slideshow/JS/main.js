function daysto() {
    var countdownDate = new Date("Dec 25, 2021 00:00:00").getTime();                   // set date to countdown
    var x = setInterval(function() {                                                   // update count 1 sec
        var now = new Date().getTime();                                                // todays date&time
        var distance = countdownDate - now;                                            // *distance* between today and chrismas
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("xmas").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";  // output define html
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("xmas").innerHTML = "Christmas!";
        }
    }, 1000);
}


// slideshow

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}