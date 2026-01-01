let horse = document.querySelector(".horse_img");
let groomi = document.querySelector(".groomi_img");

let rotated = false;

horse.addEventListener('click', () => {
  if (rotated) {
    horse.style.transform = 'rotateZ(-20deg)';
  } else {
    horse.style.transform = 'rotateZ(20deg)';
  }
  rotated = !rotated;
});

groomi.addEventListener('click', () => {
  if (rotated) {
    groomi.style.transform = 'rotateZ(-20deg)';
  } else {
    groomi.style.transform = 'rotateZ(20deg)';
  }
  rotated = !rotated;
});
