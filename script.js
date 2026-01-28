let currentIndex = 0;

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

function imageTemplate(src) {
  return `
    <img 
      src="${src}" 
      class="thumbnail"
      onclick="openDialog('${src}')"
      alt="Ausgewähltes Bild"
      tabindex="0"
    >
  `;
}

function loadImages() {
  gallery.innerHTML = "";

  for (let pic = 0; pic < images.length; pic++) {
    gallery.innerHTML += imageTemplate(images[pic]);
  }
}

loadImages();

function openDialog(src) {
  currentIndex = images.indexOf(src);
  updateDialog();
  document.getElementById("dialog").classList.remove("d-none");
}

function closeDialog() {
  document.getElementById("dialog").classList.add("d-none");
}

function updateDialog() {
  let dialogImage = document.getElementById("dialogImage");
  let imageName = document.getElementById("imageName");
  let imageCounter = document.getElementById("imageCounter");

  dialogImage.src = images[currentIndex];
  imageName.textContent = images[currentIndex].split("/").pop();
  imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateDialog();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateDialog();
}

document.addEventListener("keydown", (e) => {
  const dialog = document.getElementById("dialog");

 
  if (!dialog.classList.contains("d-none")) {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeDialog();
    return;
  }

  if (e.key === "Enter") {
    openDialog(images[currentIndex]);
  }
});