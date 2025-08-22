// Clothes slot (2 shirts + 1 pants)
const clothes = [
    'images/Pompourin-4 1.png',  // Shirt 1
    'images/Pompourin-3 1.png',  // Shirt 2
    'images/Pompourin-5 1.png'   // Pants
  ];
  let clothesIndex = -1;
  
  // Hats slot (3 hats)
  const hats = [
    'images/Pompourin-7 1.png',
    'images/Pompourin-8 2.png',
    'images/Pompourin-6 1.png'
  ];
  let hatIndex = -1;
  
  function rotateClothes() {
    clothesIndex = (clothesIndex + 1) % clothes.length;
    const clothesImg = document.getElementById('clothes');
    clothesImg.src = clothes[clothesIndex];
    clothesImg.style.display = 'block';
  }
  
  function rotateHat() {
    hatIndex = (hatIndex + 1) % hats.length;
    const hatImg = document.getElementById('hat');
    hatImg.src = hats[hatIndex];
    hatImg.style.display = 'block';
  }
  
  function removeClothes() {
    const clothesImg = document.getElementById('clothes');
    clothesImg.style.display = 'none';
    clothesIndex = -1;
  }
  
  function removeHat() {
    const hatImg = document.getElementById('hat');
    hatImg.style.display = 'none';
    hatIndex = -1;
  }

  const clickSound = new Audio('sounds/pop19.wav');
  
  document.querySelectorAll('#controls button').forEach(btn => {
    btn.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });