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
      alt="Gallery image"
    >
  `;
}


function loadImages() {
  gallery.innerHTML = ""; 

  for (let i = 0; i < images.length; i++) {
    gallery.innerHTML += imageTemplate(images[i]);
  }
}

loadImages();


function openDialog(src) {
  let dialog = document.getElementById("dialog");
  let dialogImage = document.getElementById("dialogImage");

  dialogImage.src = src;
  dialog.classList.remove("d-none");
}



function closeDialog() {
  document.getElementById("dialog").classList.add("d-none");
}
