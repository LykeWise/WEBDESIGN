function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.opacity="1.0";
    document.getElementById("cont").style.transition="0.2s";
    
    
}
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("sidemenue").style.opacity= "1.0";
    document.getElementById("myNav").style.opacity="0.0";
    document.getElementById("cont").style.transition="0.2s";
    
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

  function openCategory(idName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("solidt");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    
    document.getElementById(idName).style.display = "block";
  }

  function mouseover()
{
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "block";
    
}
function mouseout()
{
  document.getElementById("img1").style.display = "block";
  document.getElementById("img2").style.display = "none";
  
}

