let currentIndex = 0;
let lastFocusedThumbnail = null;

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

const gallery = document.getElementById("gallery");

function imageTemplate(src) {
  return `
    <button class="thumbnail-btn" data-src="${src}">
      <img
        src="${src}"
        class="thumbnail"
        alt="Ausgewähltes Bild"
      >
    </button>
  `;
}

function loadImages() {
  gallery.innerHTML = "";
  images.forEach((img) => {
    gallery.innerHTML += imageTemplate(img);
  });

  document.querySelectorAll(".thumbnail-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      openDialog(btn.dataset.src);
    });
  });
}

loadImages();

function openDialog(src) {
  currentIndex = images.indexOf(src);
  lastFocusedThumbnail = document.activeElement;

  updateDialog();

 let dialog = document.getElementById("dialog");
  dialog.classList.remove("d-none");
  document.body.style.overflow = "hidden";

  trapFocus(dialog);
}

function closeDialog() {
 let dialog = document.getElementById("dialog");
  dialog.classList.add("d-none");
  document.body.style.overflow = "";

  if (dialog._removeTrap) dialog._removeTrap();
  if (lastFocusedThumbnail) lastFocusedThumbnail.focus();
}

function trapFocus(dialog) {
  let focusable = dialog.querySelectorAll("button");
  let first = focusable[0];
  let last = focusable[focusable.length - 1];

  function handleTab(e) {
    if (e.key !== "Tab") return;

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  dialog.addEventListener("keydown", handleTab);
  first.focus();

  dialog._removeTrap = () => {
    dialog.removeEventListener("keydown", handleTab);
  };
}

function updateDialog() {
  document.getElementById("dialogImage").src = images[currentIndex];
  document.getElementById("imageName").textContent = images[currentIndex]
    .split("/")
    .pop();
  document.getElementById("imageCounter").textContent = `${
    currentIndex + 1
  } / ${images.length}`;
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
});
