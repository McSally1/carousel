const slider = document.querySelector(".slide-image");
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
let i = 0; //current image index

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}
function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider.setAttribute("src", "images/" + images[i]);
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
