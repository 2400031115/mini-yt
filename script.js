// 🎇 Background animation (3D floating bubbles)
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array(80).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3,
  dx: (Math.random() - 0.5) * 0.6,
  dy: (Math.random() - 0.5) * 0.6
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

// 🎬 Load videos from RAMIkkada channel using RSS feed
const channelId = "UCdYMuZFlqgKUZyvhY9JcA7w"; // RAMIkkada's channel ID
const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

const videosContainer = document.getElementById('videos');

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    data.items.forEach(video => {
      const videoId = video.link.split("v=")[1];
      const card = document.createElement('div');
      card.className = 'video-card';
      card.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
        <h3>${video.title}</h3>
      `;
      videosContainer.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading videos:", err);
    videosContainer.innerHTML = "<p>⚠️ Could not load videos. Try again later.</p>";
  });
