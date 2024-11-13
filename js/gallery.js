function upDate(previewPic) {
  const displayDiv = document.getElementById('image');
  displayDiv.style.backgroundImage = `url(${previewPic.src})`;
  displayDiv.textContent = previewPic.alt;
}

function unDo() {
  const displayDiv = document.getElementById('image');
  displayDiv.style.backgroundImage = '';
  displayDiv.textContent = 'Hover over an image below to display here.';
}
