// Move "No" button
function moveNo() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

// YES clicked
function yesClicked() {
  document.getElementById("mainCard").innerHTML = `
    <h1>YAYYYYY 🥹❤️</h1>
    <p>You just made me the happiest person alive.</p>
    <p>Happy Valentine’s Day 💘</p>
  `;

  // Heart blast
  for (let i = 0; i < 90; i++) {
    setTimeout(createHeart, i * 20);
  }
}

// ❤️ Heart creation
const heartLayer = document.getElementById("heart-layer");
const heartEmojis = ["❤️", "💖", "💕", "💘", "💗"];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 300 + 100;

  const x = Math.cos(angle) * distance + "px";
  const y = Math.sin(angle) * distance + "px";

  heart.style.setProperty("--x", x);
  heart.style.setProperty("--y", y);

  heart.style.left = "50%";
  heart.style.top = "50%";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  heartLayer.appendChild(heart);

  setTimeout(() => heart.remove(), 1500);
}
