// Add your JavaScript code here, for example:
// To make the button interactive:
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('You clicked the button!');
    // You can add more complex actions here, like redirecting to another page or triggering animations.
});

var modal = document.getElementById('id01');
//when the user clicks outside the modal, close it
window.onclick = function(event) 
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}
var modal = document.getElementById('id02');
//when the user clicks outside the modal, close it
window.onclick = function(event) 
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }

