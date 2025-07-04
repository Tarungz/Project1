const slider = document.getElementById("card-slider");
const btnLeft = document.querySelector(".slide-btn.left");
const btnRight = document.querySelector(".slide-btn.right");

btnLeft.addEventListener("click", () => {
  slider.scrollLeft -= 250;
});

btnRight.addEventListener("click", () => {
  slider.scrollLeft += 250;
});





