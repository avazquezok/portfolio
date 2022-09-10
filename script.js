let button = document.getElementById("links");
button.addEventListener("click", function(e) {  
    if (button.style.display === "block") {
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
  })