// Get Random Color 
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Get references to all 6 cards
const cards = [
  document.getElementById('triangle-random'),
  document.getElementById('rectangle-random'),
  document.getElementById('parallelogram-random'),
  document.getElementById('rhombus-random'),
  document.getElementById('pentagon-random'),
  document.getElementById('ellipse-random')
];

// Add event listeners to each card
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover', function () {
    const randomColor = getRandomColor();
    cards[i].style.backgroundColor = randomColor;
    cards[i].style.color = 'gray';
  });

  cards[i].addEventListener('mouseout', function () {
    cards[i].style.backgroundColor = 'white';
  });
}