// Simple floating 3D bubbles background
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array(100).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3,
  dx: (Math.random() - 0.5) * 0.7,
  dy: (Math.random() - 0.5) * 0.7
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,255,200,0.5)';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

// Embed your YouTube videos (replace links when needed)
const videos = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example video
  'https://www.youtube.com/embed/8ZtInClXe1Q',
  'https://www.youtube.com/embed/2Vv-BfVoq4g'
];

// Add videos dynamically
const gallery = document.getElementById('video-gallery');
videos.forEach(link => {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.innerHTML = `
    <iframe src="${link}" allowfullscreen></iframe>
    <h3>Watch on RAMIkkada 🔥</h3>
  `;
  gallery.appendChild(card);
});
