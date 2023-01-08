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
