// Moving "No" button
function moveNo() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

// YES clicked
function yesClicked() {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px;">
      <h1>YAYYYYY 🥹❤️</h1>
      <p>You just made me the happiest person alive.</p>
      <p>Happy Valentine’s Day 💘</p>
    </div>
  `;
}

// ❤️ Floating hearts logic
const heartContainer = document.getElementById("heart-container");
const hearts = ["💖", "💕", "💘", "💗", "💓"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// spawn hearts continuously
setInterval(createHeart, 400);
