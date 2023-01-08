document.getElementById('black').classList.add('selected');

const idSectionPixel = document.getElementById('pixel-board');

const createPixels = (number) => {

  for (let i = 0; i < number; i++) {
    const tagDiv = document.createElement('div');

    idSectionPixel.appendChild(tagDiv);

    for (let c = 0; c < number; c++) {
      const tagDivChild = document.createElement('div');
      tagDivChild.classList.add('pixel')
      tagDiv.appendChild(tagDivChild)
    }
  }
};

createPixels(5)

//CLICK NAS PALETAS
const palettes = document.querySelectorAll('.color');

let corSelecionada = '';

const selectedColor = (event) => {
  if(!event.target.classList.contains('selected')) {
    for (let i = 0; i < palettes.length; i++) {
      if (palettes[i].classList.contains('selected')) {
        palettes[i].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
    corSelecionada = event.target.id;
  }
}

for (let i = 0; i < palettes.length; i++) {
  if (palettes[i].classList.contains('selected')) {
    corSelecionada = palettes[i].id;
  }
  palettes[i].addEventListener('click', selectedColor)
}

// COLORIR PIXELS
const pixels = document.querySelectorAll('.pixel')

const selectedPixel = (event) => {
  event.target.style.backgroundColor = corSelecionada;
}

for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', selectedPixel)
}