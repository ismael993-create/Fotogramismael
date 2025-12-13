let images = [
  "img/photo1.svg",
  "img/photo2.svg",
  "img/photo3.svg",
  "img/photo4.svg",
  "img/photo5.svg",
  "img/photo6.svg",
  "img/photo7.svg",
  "img/photo8.svg",
  "img/photo9.svg",
  "img/photo10.svg",
  "img/photo11.svg",
  "img/photo12.svg",
];

let gallery = document.getElementById("gallery");

images.forEach((src) => {
  let img = document.createElement("img");
  img.src = src;
  img.classList.add("thumbnail");
  gallery.appendChild(img);
});
