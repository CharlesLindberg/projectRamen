function myFunction() {
  var x = document.getElementById("myTopnav");


  if (x.className === "topnav") {

    x.className += " responsive";

  } else {

    x.className = "topnav";

  }
  
}

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

document.querySelector(".btn-boka").addEventListener("click", () => {
  alert("Bokningen är gjord!")
})
