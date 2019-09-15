function openNav() {
    document.getElementById("myNav").style.width = "100%";
    
}
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("sidemenue").style.opacity= "1.0";
  }

  var myIndex = 0;

  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
    x[myIndex-1].style.width = "50%"; 
    setTimeout(carousel, 3500); // Change image every 2 seconds
  }

  var slideIndex = 1;


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
  x[myIndex-1].style.width = "50%"; 
}

  function openCity(cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("solidt");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    
    document.getElementById(cityName).style.display = "block";
  }