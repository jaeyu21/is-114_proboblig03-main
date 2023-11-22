function circleCanvas() {
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(150, 150, 80, 0, 2 * Math.PI);
  ctx.fillStyle = "darkorange";
  ctx.fill();

  const currentTime = new Date().toLocaleTimeString('no-NO', { timeZone: 'Europe/Oslo' });

  ctx.fillStyle = "lavender";
  ctx.font = "bold 18px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.fillText(currentTime, 150, 150);
  
}

document.addEventListener("DOMContentLoaded", circleCanvas); 

function createDiamondSVG() {
  const emojis = ['😁', '😇', '😉', '😅', '🥰'];
  const svg = document.getElementById('diamond');
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute("d", "M 100,20 " +
                          "Q 120,20 140,50 " +
                          "Q 160,80 140,110 " +
                          "Q 120,140 100,140 " +
                          "Q 80,140 60,110 " +
                          "Q 40,80 60,50 " +
                          "Q 80,20 100,20 Z");
  path.setAttribute("fill", "pink");
  path.setAttribute("stroke", "purple");
  
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", "80");
  text.setAttribute("y", "90");
  text.setAttribute("font-size", "30");
  text.textContent = randomEmoji;

  svg.appendChild(path);
  svg.appendChild(text);
}
  
createDiamondSVG();
