function showHearts() {
  const heartsContainer = document.getElementById('hearts');
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = ['💖','💗','💕','💞','💓'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}