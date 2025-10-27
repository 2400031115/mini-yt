// 🔥 List of popular/trending YouTube video IDs
const videoIds = [
  "Zi_XLOBDo_Y", // Example: Alan Walker - Faded
  "RgKAFK5djSk", // Wiz Khalifa - See You Again
  "3JZ_D3ELwOQ", // Charlie Puth - Attention
  "kXYiU_JCYtU", // Linkin Park - Numb
  "JGwWNGJdvx8", // Ed Sheeran - Shape of You
  "tAGnKpE4NCI", // Metallica - Nothing Else Matters
  "hT_nvWreIhg", // OneRepublic - Counting Stars
  "fLexgOxsZu0", // Imagine Dragons - Thunder
  "UceaB4D0jpo", // Marshmello - Alone
  "i0p1bmr0EmE"  // Justin Bieber - Peaches
];

const videoGrid = document.getElementById("video-grid");

// 🧠 Function to shuffle and display videos
function loadVideos() {
  videoGrid.innerHTML = ""; // clear previous

  // Pick 6 random videos
  const shuffled = videoIds.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);

  selected.forEach(id => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    videoGrid.appendChild(iframe);
  });
}

// Initial load
loadVideos();

// 🔄 Auto-refresh every 30 seconds
setInterval(loadVideos, 30000);
